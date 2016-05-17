// Aula 2 - Node rodando com express

var express = require("express");
var app = express();
app.get('/', function(req,res){
res.send('<h1>Título da página!</h1>');
});


app.listen(3000, function(){
	console.log("AP rodando!");
});
