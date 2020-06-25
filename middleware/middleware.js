const server = require("express")();
const mongoose = require("mongoose");
const bodyParser=require('body-parser');
const config=require("./../config/config.json")

server.use(bodyParser.json());

server.use("/", (req, res, next) => {
	let { protocal, host, port, name } = config.app.db;
	mongoose.connect(`${protocal}${host}:${port}/${name}`, { useNewUrlParser: true, useUnifiedTopology: true });
	next();
});

module.exports= server;