const Keycloak = require('keycloak-connect');

const Config = require('../api.json');

const {
  env: {
    KEY_CLOAK: {
      URI, REALM, CLIENT_ID, CLIENT_SECRET,
    },
  },
} = Config;

let _keycloak;

const keycloakConfig = {
  // clientId: CLIENT_ID,
  // bearerOnly: true,
  // serverUrl: URI,
  // realm: REALM,
  // credentials: {
  //     secret: CLIENT_SECRET
  // }

  //     "realm": "cws",
  //     "auth-server-url": "http://localhost:8080/auth/",
  //     "ssl-required": "external",
  //     "resource": "cws_web",
  //     "public-client": true,
  //     "verify-token-audience": true,
  //     "use-resource-role-mappings": true,
  // "confidential-port": 0

  realm: REALM,
  'bearer-only': true,
  'auth-server-url': URI,
  'ssl-required': 'none',
  resource: CLIENT_ID,
  'confidential-port': 0,
  credentials: {
    secret: CLIENT_SECRET,
  },
};

function initKeycloak(memoryStore) {
  if (_keycloak) {
    console.warn('Trying to init Keycloak again!');
    return _keycloak;
  }
  console.log('Initializing Keycloak...');
  _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
  return _keycloak;
}

function getKeycloak() {
  if (!_keycloak) {
    console.error('Keycloak has not been initialized. Please call init first.');
  }
  return _keycloak;
}

module.exports = {
  initKeycloak,
  getKeycloak,
};
