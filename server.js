import http from "http";
const PORT = 3000;

const rotas = {
    "/":"curso node!",
    "/livros": "livros",
    "/autores":"Autores"
}
const server  = http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"text/plain"});
    res.end(rotas[req.url]);
});

server.listen(PORT,()=>{
    console.log("Servidor escultando!")
});

