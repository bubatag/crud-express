import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Animais = connection.define('bubalinos', {
    idbubalino: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    raca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    n_etiqueta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idcoleira: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    idusuario: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false // Desativa createdAt e updatedAt
  });
Animais.sync({force:false});
export default Animais;