import Forum from "../model/forum.model.js"
import Usuario from "../model/usuario.model.js"
import bcrypt from 'bcrypt'

const getUsuarios = async () => {
    return await Usuario.findAll({
        include: {
            model: Forum,
            attributes: ['idForum', 'titulo', 'createdAt', 'updatedAt']
        },
        attributes: ['idUsuario', 'usuario', 'nome', 'email' , 'avatar', 'isAdm', 'createdAt', 'updatedAt']
    })
}

const getUsuario = async (idUsuario) => {
    return await Usuario.findByPk(idUsuario, {
        attributes: ['idUsuario', 'usuario', 'nome', 'email' , 'avatar', 'isAdm', 'createdAt', 'updatedAt']
    })
}

const getUsuarioByEmail = async (email) => {
    return await Usuario.findOne({
        attributes: ['idUsuario', 'usuario', 'nome', 'email' , 'avatar', 'isAdm', 'createdAt', 'updatedAt'],
        include: Forum,
        where: {
            email
        },
    })
}

const getUsuarioByUsuario = async (usuario) => {
    return await Usuario.findOne({
        attributes: ['idUsuario', 'usuario', 'nome', 'email' , 'avatar', 'isAdm', 'createdAt', 'updatedAt'],
        where: {
            usuario
        },
    })
}

const createUsuario = async (usuario) => {
    return await Usuario.create(usuario)
}

const updateUsuario = async (usuarioData) => {
    return await Usuario.update(usuarioData, {
        where: {
            idUsuario: usuarioData.idUsuario
        }
    })
}

const deleteUsuario = async (usuario) => {
    return await Usuario.destroy({
        where: {
            usuario
        }
    })
}

const signIn = async (usuario, senha) => {
    const usuarioData = await Usuario.findOne({
        where: {
            usuario
        }
    })
    
    if(usuarioData && bcrypt.compareSync(senha, usuarioData.senha ?? "")) {
        return usuarioData
    }

    throw new Error("Incorrect password.")
}

export default {
    getUsuarios,
    getUsuario,
    createUsuario,
    getUsuarioByEmail,
    getUsuarioByUsuario,
    updateUsuario,
    deleteUsuario,
    signIn
}