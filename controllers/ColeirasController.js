import express from "express";
const router = express.Router();
import Coleiras from "../models/coleiras.js";

// SELECT
router.get("/coleiras", function (req, res) {
  Coleiras.findAll()
    .then((coleiras) => {
      res.render("coleiras", {
        coleiras: coleiras,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

// DELETE
router.get("/coleiras/delete/:idcoleira", (req, res) => {
  const id = req.params.idcoleira;
  Coleiras.destroy({
    where: {
      idcoleira: id,
    },
  })
    .then(() => {
      res.redirect("/coleiras");
    })
    .catch((error) => {
      console.log(error);
    });
});

// CREATE
router.post("/coleiras/create", (req, res) => {
  const n_coleira = req.body.n_coleira;
  const ip = req.body.ip;
  Coleiras.create({
    n_coleira: n_coleira,
    ip: ip,
  })
    .then(() => {
      res.redirect("/coleiras");
    })
    .catch((error) => {
      console.log(error);
    });
});

// PAGE UPDATE
router.get("/coleiras/editar/:idcoleira", (req, res) => {
  const id = req.params.idcoleira;
  Coleiras.findByPk(id).then((coleira) => {
    res.render("coleiraEditar", {
      coleira: coleira,
    });
  });
});

// UPDATE
router.post("/coleiras/update/:id", (req, res) => {
  const id = req.body.id;
  const n_coleira = req.body.n_coleira;
  const ip = req.body.ip;
  Coleiras.update(
    {
      n_coleira: n_coleira,
      ip: ip,
    },
    { where: { idcoleira: id } }
  ).then(() => {
    res.redirect("/coleiras");
  });
});

export default router;
