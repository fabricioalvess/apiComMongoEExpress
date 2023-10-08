import express from "express";
const app = express();

app.use(express.json())

const livros = [
   { 
        id: 1,
        titlo: "Senhor dos Aneis"
    },
    {
        id:2,
        titulo:"O Hobbit"
    }
];
app.get("/",(req,res)=>{
    res.status(200).send("Curso de node.Js");
});
app.get("/livros", (req,res)=>{
    res.status(200).json(livros)
});
app.post("/livros",(req,res)=>{
    livros.push(req.body)
    res.status(201).send("cadastrado")
})

export default app