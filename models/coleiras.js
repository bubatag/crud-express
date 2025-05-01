import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Coleiras = connection.define('coleiras', {
    n_coleira: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    ip: {
        type: Sequelize.STRING,
        allowNull: true
    },
});
Coleiras.sync({force:false});
export default Coleiras;