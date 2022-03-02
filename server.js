const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
// const session = require('express-session');
const figlet = require('figlet');
const CONFIG = require('./api.json');
const xmlparser = require('express-xml-bodyparser');
var bodyParser = require('body-parser');


// const memoryStore = new session.MemoryStore();

const routes = require('./src/routes');

const app = express();
// app.use(xmlparser());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// app.use(express.json());
// app.use(
//   session({
//     secret: 'some secret',
//     resave: false,
//     saveUninitialized: true,
//     store: memoryStore,
//   }),
// );

// eslint-disable-next-line import/extensions
// const keycloak = require('./config/keycloak-config.js').initKeycloak(
//   memoryStore,
// );


 app.use(
   cors({
     origin(origin, callback) {
       if (!origin) return callback(null, true);
       if (CONFIG.env.ALLOW_ORIGINS.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not '
           + 'allow access from the specified Origin.';
         return callback(new Error(msg), false);
       }
       return callback(null, true);
     },
     credentials: true,
     exposedHeaders: ['x-auth'],
   }),
 );
app.options('*', cors())

// app.use(keycloak.middleware());
app.use(fileUpload());
app.use(cookieParser());

// eslint-disable-next-line no-unused-expressions
app.static;

app.use('/api', routes);
// app.use('/api',keycloak.protect(), routes);

app.set('port', process.env.PORT || 5000);

http.createServer(app).listen(app.get('port'), () => {
  console.log('===============================================');
  figlet('cws - api', (err, data) => {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(data);
    console.log(`Server listening on port ${app.get('port')}`);
    console.log('==============================================='); 
  });
});

module.exports = app;

