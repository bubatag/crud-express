import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Animais = connection.define('bubalinos', {
    idBubalinos: {
        // Tipo do dado
        type: Sequelize.INTEGER,
        // Permite Vazio?
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: true
    },
    raca: {
        type: Sequelize.STRING,
        allowNull: true
    },
    n_etiqueta: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: true
    },
    coleira: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
});
Animais.sync({force:false});
export default Animais;