import db from './db.js'
import { DataTypes, Sequelize } from 'sequelize'
import Usuario from './usuario.model.js'
import Topico from './topico.model.js'
import ConexaoUsuarioForum from './conexaoUsuarioForum.model.js'

const Forum = db.define('forum', {
    idForum: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
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
    tableName: 'forum'
})

Forum.belongsTo(Usuario, {foreignKey: 'idUsuario', onDelete: 'cascade'})
Forum.belongsToMany(Topico, {through: 'forum_topics', onDelete: 'cascade'})
Topico.belongsToMany(Forum, {through: 'forum_topics', onDelete: 'cascade'})

Usuario.hasMany(Forum, {foreignKey: 'id_usuario', onDelete: 'cascade'})

Forum.hasMany(ConexaoUsuarioForum)
ConexaoUsuarioForum.belongsTo(Forum)

Forum.addHook('beforeUpdate', (forum) => {
    forum.updatedAt = Sequelize.fn("NOW")
})

export default Forum