import express from "express";
const router = express.Router();
import Animais from "../models/animais.js";

router.get("/animais", function (req, res) {
  // SELECT
  Animais.findAll().then((animais) => {
      res.render("animais", {
        animais: animais,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

// DELETE
router.get("/animais/delete/:id", (req,res) => {
  const id = req.params.id;
  Animais.destroy({
    where : {
      id : id,
    }
  }).then(() => {
    console.log("Cliente Excluido com Sucesso!");
    res.redirect("/animais");
  }).catch((error) => {
    console.log(error);
  })
})

// CREATE
router.post("/animais/create", (req,res) => {
  const nome = req.body.nome;
  const raca = req.body.raca;
  const etiqueta = req.body.etiqueta;
  const idade = req.body.idade;
  const sexo = req.body.sexo;
  const coleira = req.body.coleira;

  Animais.create({
    nome : nome,
    raca : raca,
    n_etiqueta : etiqueta,
    idade : idade,
    sexo : sexo,
    coleira : coleira,
  }).then(() => {
    console.log("Registro efetuado com sucesso!");
    res.redirect("/animais");
  }).catch((error) => {
    console.log(error);
  })
})
export default router;