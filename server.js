var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.listen('5700', function  (err,res) {
	if(err){
    console.log(err);
    };
	console.log("server running");
});