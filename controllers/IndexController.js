import express from "express";
const router = express.Router();
import { fn, col } from "sequelize";

import Animais from "../models/animais.js";
import Coleiras from "../models/coleiras.js";
import Dados from "../models/dados.js";

router.get("/index", async (req, res) => {
  try {
    const totalAnimais = await Animais.count();
    const totalColeiras = await Coleiras.count();
    const mediaTemperaturaResult = await Dados.findOne({
        attributes: [[fn("AVG", col("temperatura")), "mediaTemperatura"]],
      });
  
      const mediaTemperatura = parseFloat(mediaTemperaturaResult.get("mediaTemperatura")).toFixed(2);

    res.render("index", {
      totalAnimais,
      totalColeiras,
      mediaTemperatura
    });
  } catch (error) {
    console.error("Erro ao carregar dados do dashboard:", error);
    res.status(500).send("Erro no servidor");
  }
});

export default router;
