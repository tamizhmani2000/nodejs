const express = require('express');

const app = express();


const LOGGER = function (req,res,next) {

	console.log("Request Logged on:");
	next();
}

app.use(LOGGER);

app.get('/',function(req,res) {
	
	res.send("Hello World");
})

app.listen(3000, function() {
	
	console.log("Node Js Server started and listening port 3000");
})


