import express from "express";
const router = express.Router();
import Animais from "../models/animais.js";
import Dados from "../models/dados.js";
import Coleiras from "../models/coleiras.js";

router.get("/animais", function (req, res) {
  Promise.all([
    Animais.findAll({
      include: [
        { model: Dados, as: "dados" },
        { model: Coleiras, as: "coleira" }
      ]
    }),
    Coleiras.findAll()
  ])
    .then(([animais, coleiras]) => {
      res.render("animais", {
        animais: animais,
        coleiras: coleiras
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
router.get("/animais/editar/:id", async (req, res) => {
  const idbubalino = req.params.id;

  try {
    const animal = await Animais.findByPk(idbubalino);
    const coleiras = await Coleiras.findAll();

    res.render("animalEditar", {
      animal: animal,
      coleiras: coleiras
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Erro ao buscar animal ou coleiras.");
  }
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