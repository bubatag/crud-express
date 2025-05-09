import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Localizacao = connection.define('localizacao', {
    idlocalizacao: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idbubalino: Sequelize.INTEGER,
    idcoleira: Sequelize.INTEGER,
    latitude: Sequelize.FLOAT,
    longitude: Sequelize.FLOAT
}, {
    tableName: 'localizacao', // Evita pluralização automática
    timestamps: false // Se você não usa createdAt/updatedAt
});

export default Localizacao;
