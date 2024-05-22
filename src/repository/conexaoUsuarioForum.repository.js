import ConexaoUsuarioForum from "../model/conexaoUsuarioForum.model.js"
import Usuario from "../model/usuario.model.js"

const getAllFollowers = async (idForum) => {
    return await ConexaoUsuarioForum.findAll({
        where: {
            forumIdForum: idForum
        },
        include: [{
            model: Usuario,
            attributes: ['idUsuario', 'usuario', 'nome']
        }]
    })
}

const createConexaoUsuarioForum = async (idUsuario, idForum) => {
    return await ConexaoUsuarioForum.create({
        usuarioIdUsuario: idUsuario,
        forumIdForum: idForum
    })
}

const isFollowing = async (idUsuario, idForum) => {
    return await ConexaoUsuarioForum.findOne({
        where: {
            usuarioIdUsuario: idUsuario,
            forumIdForum: idForum
        }
    })
}

const deleteConexaoUsuario = async (idUsuario, idForum) => {
    return await ConexaoUsuarioForum.destroy({
        where: {
            usuarioIdUsuario: idUsuario,
            forumIdForum: idForum
        }
    })
}

const getFollowersCount = async (idForum) => {
    return await ConexaoUsuarioForum.count({
        where: {
            forumIdForum: idForum
        }
    })
}

const getFollowingCount = async (idUsuario) => {
    return await ConexaoUsuarioForum.count({
        where: {
            usuarioIdUsuario: idUsuario
        }
    })
}

// const getUsuario = async (idUsuario) => {
//     return await Usuario.findByPk(idUsuario, {
//         attributes: ['idUsuario', 'usuario', 'nome', 'email' , 'avatar', 'isAdm', 'createdAt', 'updatedAt']
//     })
// }

// const getUsuarioByEmail = async (email) => {
//     return await Usuario.findOne({
//         attributes: ['idUsuario', 'usuario', 'nome', 'email' , 'avatar', 'isAdm', 'createdAt', 'updatedAt'],
//         include: Forum,
//         where: {
//             email
//         },
//     })
// }

// const getUsuarioByUsuario = async (usuario) => {
//     return await Usuario.findOne({
//         attributes: ['idUsuario', 'usuario', 'nome', 'email' , 'avatar', 'isAdm', 'createdAt', 'updatedAt'],
//         where: {
//             usuario
//         },
//     })
// }

// const createUsuario = async (usuario) => {
//     return await Usuario.create(usuario)
// }

// const updateUsuario = async (usuarioData) => {
//     return await Usuario.update(usuarioData, {
//         where: {
//             idUsuario: usuarioData.idUsuario
//         }
//     })
// }

// const deleteUsuario = async (usuario) => {
//     return await Usuario.destroy({
//         where: {
//             usuario
//         }
//     })
// }

// const signIn = async (usuario, senha) => {
//     const usuarioData = await Usuario.findOne({
//         where: {
//             usuario
//         }
//     })

//     if(usuarioData && bcrypt.compareSync(senha, usuarioData.senha ?? "")) {
//         return usuarioData
//     }

//     throw new Error("Incorrect password.")
// }

export default {
    getAllFollowers,
    createConexaoUsuarioForum,
    deleteConexaoUsuario,
    isFollowing,
    getFollowersCount,
    getFollowingCount
}