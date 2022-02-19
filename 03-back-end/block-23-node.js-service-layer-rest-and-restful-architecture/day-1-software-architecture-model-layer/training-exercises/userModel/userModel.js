const db = require('./db');

async function getUser(username) {
  return db.findOne({ username }).then((result) => result || null);
}

module.exports = getUser;
