// Diferentes respostas de URL com node puro(sem o express)
var http = require('http'); // objeto que representa biblioteca http
var server = http.createServer(function(req,res){

if(req.url =="/produtos"){
res.end("<html><h1>Produtos</h1></html>");
}
else{
res.end("<html><h1>Listando os produtos</h1></html>");
}
}); // cria server
server.listen(3000); // faz server ficar escutando na porta 3000
console.log("servidor rodando");