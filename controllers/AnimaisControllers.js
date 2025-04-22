import express from "express";
const router = express.Router();
import Animais from "../models/animais.js";

router.get("/index", function (req, res) {
  Animais.findAll().then((animais) => {
      res.render("index", {
        animais: animais,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
export default router;