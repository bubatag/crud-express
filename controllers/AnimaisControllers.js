import express from "express";
const router = express.Router();
import Animais from "../models/animais.js";
import Dados from "../models/dados.js";

// SELECT
router.get("/animais", function (req, res) {
  Animais.findAll()
    .then((animais) => {
      res.render("animais", {
        animais: animais,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

// DELETE
router.get("/animais/delete/:id", (req, res) => {
  const idbubalino = req.params.id;
  Animais.destroy({
    where: {
      idbubalino: idbubalino,
    },
  })
    .then(() => {
      res.redirect("/animais");
    })
    .catch((error) => {
      console.log(error);
    });
});

// CREATE
router.post("/animais/create", (req, res) => {
  const nome = req.body.nome;
  const raca = req.body.raca;
  const n_etiqueta = req.body.etiqueta;
  const idade = req.body.idade;
  const sexo = req.body.sexo;
  const idcoleira = req.body.coleira;

  Animais.create({
    nome: nome,
    raca: raca,
    n_etiqueta: n_etiqueta,
    idade: idade,
    sexo: sexo,
    idcoleira: idcoleira,
  })
    .then(() => {
      res.redirect("/animais");
    })
    .catch((error) => {
      console.log(error);
    });
});


// PAGE UPDATE
router.get("/animais/editar/:id", (req,res) => {
  const idbubalino = req.params.id;
  Animais.findByPk(idbubalino).then((animal) => {
    res.render("animalEditar", {
      animal : animal,
    });
  });
});

// UPDATE 
router.post("/animais/update/:idbubalino", (req,res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const raca = req.body.raca;
  const n_etiqueta = req.body.etiqueta;
  const idade = req.body.idade;
  const sexo = req.body.sexo;
  const idcoleira = req.body.idcoleira;
  Animais.update({
    nome: nome,
    raca: raca,
    n_etiqueta: n_etiqueta,
    idade: idade,
    sexo: sexo,
    idcoleira: idcoleira,
  },
  { where: {idbubalino: id}}).then(() => {
    res.redirect("/animais");
  });
});

// VISUALIZAÇÃO INDIVIDUAL
router.get("/animais/visualizar/:idbubalino", async (req, res) => {
  const idbubalino = req.params.idbubalino;
  try {
    const animal = await Animais.findByPk(idbubalino, {
      include: {
        model: Dados,
        as: "dados",
      }
    });

    if (!animal) {
      return res.status(404).json({ error: "Animal não encontrado" });
    }

    res.json(animal);
  } catch (err) {
    console.error("Erro ao buscar animal:", err);
    res.status(500).json({ error: "Erro interno ao buscar animal" });
  }
});

export default router;