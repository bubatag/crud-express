import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Usuario = connection.define("usuarios", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  user: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false // Desativa createdAt e updatedAt
});
Usuario.sync({ force: false });
export default Usuario;