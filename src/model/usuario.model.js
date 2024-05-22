import db from './db.js'
import { DataTypes, Sequelize } from 'sequelize'
import bcrypt from 'bcrypt'
import Forum from './forum.model.js'
import ConexaoUsuario from './conexaoUsuario.model.js'
import ConexaoUsuarioForum from './conexaoUsuarioForum.model.js'

const Usuario = db.define('usuario', {
    idUsuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
    ,
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isAdm: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
    tableName: 'usuario'
})

Usuario.hasMany(ConexaoUsuario, {foreignKey: {name: 'idSeguido'}})
Usuario.hasMany(ConexaoUsuario, {foreignKey: {name: 'idSeguidor'}})
ConexaoUsuario.belongsTo(Usuario)

Usuario.hasMany(ConexaoUsuarioForum)
ConexaoUsuarioForum.belongsTo(Usuario)

Usuario.addHook('beforeCreate', (usuario) => {
    const senha = bcrypt.hashSync(usuario.senha, 9)
    usuario.senha = senha
})


Usuario.addHook('afterUpdate', (usuario) => {
    usuario.updatedAt = Sequelize.fn("NOW")
})

export default Usuario