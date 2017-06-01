var express = require('express');
var app = express();
app.use(express.static(__dirname));
var port = process.env.PORT || 5700;
app.listen(port, function  (err,res) {
	if(err){
    console.log(err);
    };
	console.log("server running");
});
app.all('*', function(req,res) {
  console.log('restarting');
  res.status(200).sendFile(__dirname+'/index.html');
});