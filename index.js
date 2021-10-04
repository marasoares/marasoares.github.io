const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const pokedex = [];

let message = "";


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get("/", (req, res) => {
    pokedex = ["Número: ", "Nome: ", "Tipo: ", "Imagem: ", "Descrição:", "Altura:", "Peso: ", "Categoria: ", "Habilidade: "]
    message = `Parabéns! Pokemon ${nome} cadastrado com sucesso!`;
    res.redirect("/");
    res.render("../views/cadastro");

});

app.get("/index", (req, res) => {
    let pokedex = pokedex;
    res.render("../views/index"); 
});

app.post("/new", (req, res) => { 
    const cadastro = {numero: "numero", nome: "nome", tipo: "tipo", imagem: "imagem", descricao: "descrição", altura: "altura", peso: "peso", categoria: "categoria", habilidade: "habilidade"} = req.body;
    res.render("../views/registration")
});

app.post("/subscription", (req, res) => {
    res.send("Formulário Recebido!");
  });

app.post("/subscripition", (req, res) => {
  const { nome, tipo, imagem } = req.body;
  res.send({nome: "nome", tipo: "tipo", imagem: "imagem"});
});

app.listen(port, () => 
    console.log(`Servidor rodando em http://localhost:${port}.`)
);
