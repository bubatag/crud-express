import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Dados = connection.define('dados', {
    temperatura : {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    batimento_cardiaco : {
        type: Sequelize.STRING,
        allowNull: true
    },
});
Dados.sync({force:false});
export default Dados;