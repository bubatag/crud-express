import express from "express";
import Localizacao from "../models/localizacao.js";
const router = express.Router();

router.get("/localizacao", async (req, res) => {
  try {
    const localizacoes = await Localizacao.findAll();
    console.log("Localizações encontradas:", localizacoes); // <-- Adicione isto
    res.render("localizacao", { localizacoes });
  } catch (error) {
    console.error("Erro ao buscar localizações:", error); // <-- E isto
    res.status(500).send("Erro ao carregar localizações.");
  }
});



export default router;
