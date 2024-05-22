import db from './db.js'
import { DataTypes, Sequelize } from "sequelize";
import Forum from './forum.model.js';

const Topico = db.define('topico', {
    idTopico: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    underscored: true,
    tableName: 'topico'
})

export default Topico