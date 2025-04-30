import express from "express";
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

import AnimaisControllers from './controllers/AnimaisControllers.js'
import connection from "./config/sequelize-config.js";
import LoginController from "./controllers/LoginController.js";

connection.authenticate().then(() => {
    console.log("Conexão com o banco de dados efetuada!");
  }).catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.render("login");
});
app.use("/", AnimaisControllers);
app.use("/", LoginController);

app.get('/index', (req, res) => {
  // Exemplo de dados fictícios
  const dados = {
      usuarios: 120,
      acessos: [10, 20, 30, 40, 50]
  };
  res.render('index', { dados });
});

app.listen(8086, (error) => {
  if (error) {
    console.log("Erro ao iniciar servidor, erro: " + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});