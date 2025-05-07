import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Coleiras = connection.define('coleiras', {
    idcoleira: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
    },
    n_coleira: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    coleira_localizacao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ip: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idusuario: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
}, {
    timestamps: false // Desativa createdAt e updatedAt
  });
Coleiras.sync({force:false});
export default Coleiras;