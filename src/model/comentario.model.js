import { DataTypes, Sequelize } from 'sequelize'
import db from './db.js'
import Forum from './forum.model.js'
import Usuario from './usuario.model.js'

const Comentario = db.define('comentario', {
    idComentario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    conteudo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn("NOW"),
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn("NOW"),
        allowNull: false
    }
}, {
    underscored: true,
    tableName: 'comentario'
})

Comentario.belongsTo(Usuario, {foreignKey: 'idUsuario', onDelete: 'cascade'})
Usuario.hasMany(Comentario, {foreignKey: "idUsuario"})
Comentario.belongsTo(Forum, {foreignKey: 'idForum', onDelete: 'cascade'})
Forum.hasMany(Comentario, {foreignKey: 'idForum'})

export default Comentario