import db from './db.js'
import { DataTypes, Sequelize } from 'sequelize'

const ConexaoUsuario = db.define('conexao_usuario', {
    idConexao: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    // idSeguidor: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'usuario',
    //         key: 'id_usuario'
    //     }
    // },
    // idSeguido: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'usuario',
    //         key: 'id_usuario'
    //     }
    // },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn("NOW"),
        allowNull: false
    }
}, {
    underscored: true,
    tableName: 'conexao_usuario'
})


export default ConexaoUsuario