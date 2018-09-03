const http = require('http');

var headers = { 
    'User-Agent': 'Tamil',

    
};

var options = {
	hostname: 'www.neimanmarcus.com',
	port: 80,
	path: '/Alice-Olivia-Jade-Multicolor-Fur-Vest-Capes-Ponchos-Vests/prod202400331_cat34000734__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.jsp%253FitemId%253Dcat34000734%2526pageSize%253D30%2526No%253D0%2526refinements%253D&eItemId=prod202400331&cmCat=product',
	headers: headers
	
};



console.log('sending request');


const req = http.request(options,function(response){

	console.log(`${response.statusCode}`);
	console.log(`${response.headers}`);
	
	response.setEncoding('utf8');
	response.on('data', (chunk) => {
		process.stdout.write(chunk);

	});
response.on('end',() => {
	console.log (`URL: ${req.url}`);
	console.log("all processed");
});



}).end();


