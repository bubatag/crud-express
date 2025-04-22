import express from "express";
const router = express.Router();
import Usuario from "../models/usuarios.js";

router.post("/login", async (req, res) => {
  const { inputEmail, inputPassword } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { user: inputEmail } });

    if (usuario && usuario.password === inputPassword) {
      res.redirect("/index");
    } else {
      res.send("Usuário ou senha inválidos");
    }
  } catch (err) {
    console.error(err);
    res.send("Erro ao verificar login.");
  }
});
export default router;