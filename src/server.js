const express = require("express");
const cors = require("cors");
require("dotenv").config();
const database = require("./config/database");

const app = express();

app.use(express.json());
// app.use(cors); Só utilizar quando 

//Fup0
app.get("/", (req ,res) =>{
    res.json({ message: "Hello World" });
    // res.send("Hello World");
});

// Os exemplos comentados usão query params, e os não comentados pegam do body
// Fup1
app.get("/fup1", (req, res) => {
    // const num1 = Number(req.query.num1);
    // const num2 = Number(req.query.num2);
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const resposta = Fup1(num1, num2);
    res.json({ message: `O id mencionado: ${resposta}` });
});

// Fup2
app.get("/fup2", (req, res) =>{
    // const valorH = Number(req.query.valorH);
    // const horasT = Number(req.query.horasT);
    const valorH = Number(req.body.valorH);
    const horasT = Number(req.body.horasT);
    const resposta = Fup2(valorH, horasT)
    res.json({ message: `O valor a ser recebido sera: ${resposta}` });
});

// Fup3
app.get("/fup3", (req, res) =>{
    // const a = Number(req.query.a);
    // const b = Number(req.query.b);
    // const c = Number(req.query.c);
    // const d = Number(req.query.d);
    // const e = Number(req.query.e);
    const a = Number(req.body.a);
    const b = Number(req.body.b);
    const c = Number(req.body.c);
    const d = Number(req.body.d);
    const e = Number(req.body.e);
    const resposta = Fup3(a, b, c, d, e);
    res.json({ message: `O resultado do calculo sera: ${resposta}` });
});

// Fup4
app.get("/fup4", (req, res) =>{
    // const a = Number(req.query.a);
    const a = Number(req.body.a);
    const resposta = Fup4(a);
    res.json({ message: `Convertendo ${a} graus celsios para ${resposta} Fahrenheit`});
});

// Fup5
app.get("/fup5", (req, res) =>{
    // const a = Number(req.query.a);
    const a = Number(req.body.a);
    const resposta = Fup5(a);
    res.json({ message: `O resultado em km sera: ${resposta}` });
});


app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}/`);
});

module.exports = app;

function Fup1(x, y){
    return x + y;
}
function Fup2(valorH, horasT){
    return valorH * horasT;
}
function Fup3(a, b, c, d, e){
    return (a + b + c + d + e)/5
}
function Fup4(x){
    return (9*x+160)/5;
}
function Fup5(x){
    return x * 1.60934
}