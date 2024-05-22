import db from './db.js'
import { DataTypes, Sequelize } from 'sequelize'
import Usuario from './usuario.model.js'

const ConexaoUsuarioForum = db.define('conexao_usuario_forum', {
    idConexao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn("NOW"),
        allowNull: false
    }
}, {
    underscored: true,
    tableName: 'conexao_usuario_forum'
})


export default ConexaoUsuarioForum