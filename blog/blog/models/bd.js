var settings = require('../settings'),
	Db = require('mongodb').Db,
	Connection = require('mogodb').Connection,
	Server = require('mogodb').Server;
module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT),{safe: true});
