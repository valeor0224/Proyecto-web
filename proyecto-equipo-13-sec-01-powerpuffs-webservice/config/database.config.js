const debug = require('debug')('app:databaseweb');
const mongoose = require('mongoose');

const uri = process.env.DATABASE;

const connect = async () => {
  try {
    await mongoose.connect(uri);
    debug('Connected successfully to database!');
  } catch (error) {
    debug("[Error]: Can't connect to database!");
    process.exit(1);
  }
}

/*
Disconnect to database method
*/
const disconnect = async () => {
  try {
    await mongoose.disconnect();
    debug("Connection to database end");
  } catch (error) {
    process.exit(1);
  }
}

module.exports = {
  connect,
  disconnect
};