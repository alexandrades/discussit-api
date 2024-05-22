import UsuarioRepository from '../repository/usuario.repository.js'

const getUsuarios = async () => {
    return await UsuarioRepository.getUsuarios() 
}

const getUsuario = async (idUsuario) => {
    return await UsuarioRepository.getUsuario(idUsuario) 
}

const getUsuarioByUsuario = async (usuario) => {
    return await UsuarioRepository.getUsuarioByUsuario(usuario) 
}

const createUsuario = async (usuario) => {
    const emailExists = await UsuarioRepository.getUsuarioByEmail(usuario.email)
    const usuarioExists = await UsuarioRepository.getUsuarioByUsuario(usuario.usuario)

    if(emailExists){
        throw new Error("Email já cadastrado")
    }
    if(usuarioExists){
        throw new Error("Usuario já cadastrado")
    }

    const createdUsuario = await UsuarioRepository.createUsuario(usuario)
    delete createdUsuario.dataValues.senha
    delete createdUsuario.dataValues.createdAt
    delete createdUsuario.dataValues.updatedAt

    return createdUsuario
}

const updateUsuario = async (usuarioData) => {
    return await UsuarioRepository.updateUsuario(usuarioData)
}

const deleteUsuario = async (usuario) => {
    return await UsuarioRepository.deleteUsuario(usuario)
}

const signIn = async (usuario, senha) => {
    const usuarioData = await UsuarioRepository.signIn(usuario, senha)
    if(usuarioData){
        return usuarioData
    }

    return undefined
}

export default {
    getUsuarios,
    getUsuario,
    getUsuarioByUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    signIn
}