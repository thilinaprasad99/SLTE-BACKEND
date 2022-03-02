const User = require('../services/Arracks');

module.exports = {
  getUserDetailsByAuthId: {
    action: getUserDetailsByAuthId,
  },
};

function getUserDetailsByAuthId(info, callback) {
  User.getPortalaUserDetailsByAuthId(info, (user) => {
    callback(user);
  });
}
