// Aula 3 - Fim do Módulo 1 - Node rodando com ejs

var express = require("express");
var app = express();
app.set('view engine', 'ejs');
app.get('/', function(req,res){
res.render('index');	
});


app.listen(3000, function(){
	console.log("servidor rodando!");
});

