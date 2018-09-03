const http = require('http');
const  port = 3000;
const url = require('url');
const fs = require('fs');


var jsonQuery = require('json-query');
var json = JSON.parse(fs.readFileSync("./employee.json","utf-8"));

	
	//console.log(json[0].empName);


const requestHandler = (request,response) => {

		if (request.method=="POST") {
			var query = url.parse(request.url);
			console.log(query);

			var rec = query.pathname;
			
			if (rec != null && rec.length>0) {
				rec = rec.substring(1,rec.length);
			}
			response.writeHead(200,{'Content-Type':'application/json'});
			
			var edata = jsonQuery('staff[ID=108418].empName',{data:json}).value;

			
			response.write(rec);

			//response.write(query.query);
			response.write(JSON.stringify(edata));
		 	response.end();
	 } else{
		 	response.writeHead(200,{'Content-Type':'application/json'});
		 	response.write("Method not supported");
		 	response.end();
	 }

};


const server = http.createServer(requestHandler);

server.listen(port);

console.log("server running on http://127.0.0.1:3000");

