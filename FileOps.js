
const fs = require('fs');
const data = fs.readFile("../testS3.txt", function(err,res){

	if (err){
		console.log('err',err)
	}
	console.log(res.toString());
	const uscore=require('underscore');
	
});

console.log ("program completed");