const fs = require('fs');
fs.watch('../testS3.txt',function (targetFile,event) {

	console.log(targetFile, 'is',event);
});

fs.watchFile('../testS3.txt',(curr,prev) => {
	console.log(curr.mtime);

});

//fs.watchFile('../testS3.txt',function (curr,prev) {
//	console.log(curr.mtime);

//});

testarrow = (a,b) => {console.log(a+b);console.log("another");}
testarrow(5,10);
console.log ("program completed");