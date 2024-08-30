const express = require("express");
const cors = require("cors");
require("dotenv").config();
const database = require("./config/database");

const app = express();

app.use(express.json());
// app.use(cors); Só utilizar quando 

app.get("/", (req ,res) =>{
    res.json({ message: "Hello World" });
    // res.send("Hello World");
});

// Fup1
app.get("/fup1", (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    res.json({ message: `O id mencionado ${num1 + num2}` });
});

app.get("/fup2", (req, res) =>{
    const valorH = Number(req.query.valorH);
    const horasT = Number(req.query.horasT);
    res.json({ message: `O valor a ser recebido sera ${valorH * horasT}` });
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}/`);
});

module.exports = app;