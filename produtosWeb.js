var http = require('http'); // objeto que representa biblioteca http
var server = http.createServer(function(req,res){
res.end("<html><h1>Listando os produtos</h1></html>");
}); // cria server
server.listen(3000); // faz server ficar escutando na porta 3000
console.log("servidor rodando");