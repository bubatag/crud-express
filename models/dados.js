import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Dados = connection.define('dados', {
    iddados: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
    },
    temperatura : {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    batimento_cardiaco : {
        type: Sequelize.STRING,
        allowNull: false
    },
    idbubalino: {
            type: Sequelize.INTEGER,
            allowNull: false
    },
    idcoleira: {
            type: Sequelize.INTEGER,
            allowNull: false
    }
}, {
    timestamps: false // Desativa createdAt e updatedAt
  });
Dados.sync({force:false});
export default Dados;