var express = require('express');
var app = express();
<<<<<<< HEAD
app.use(express.static(__dirname+'/dist'));
=======
app.use(express.static(__dirname));
>>>>>>> 53cacbe0c32de4a0aca1008a50c59cd5ce20b9c3
var port = process.env.PORT || 5700;
app.listen(port, function  (err,res) {
	if(err){
    console.log(err);
    };
	console.log("server running");
});
app.all('*', function(req,res) {
  console.log('restarting');
<<<<<<< HEAD
  res.status(200).sendFile(__dirname+'/dist/index.html');
=======
  res.status(200).sendFile(__dirname+'/index.html');
>>>>>>> 53cacbe0c32de4a0aca1008a50c59cd5ce20b9c3
});