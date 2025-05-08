import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Usuario = connection.define("usuarios", {
  idusuario: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ccir: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false // Desativa createdAt e updatedAt
});
Usuario.sync({ force: false });
export default Usuario;