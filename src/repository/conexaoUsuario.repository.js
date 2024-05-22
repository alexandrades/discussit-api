import Forum from "../model/forum.model.js"
import ConexaoUsuario from "../model/conexaoUsuario.model.js"
import Usuario from "../model/usuario.model.js"

const getAllFollowers = async (idSeguido) =>{
    return await ConexaoUsuario.findAll({
        where: {
            idSeguido
        },
        include: [{
            model: Usuario,
            attributes: ['idUsuario', 'usuario', 'nome']
        }]
    })
}

const createConexaoUsuario = async (idSeguidor, idSeguido) => {
    return await ConexaoUsuario.create({ idSeguidor, idSeguido })
}

const isFollowing = async (idSeguidor, idSeguido) => {
    return await ConexaoUsuario.findOne({
        where: {
            idSeguidor,
            idSeguido
        }
    })
}

const deleteConexaoUsuario = async (idSeguidor, idSeguido) => {
    return await ConexaoUsuario.destroy({
        where: {
            idSeguidor,
            idSeguido
        }
    })
}

const getFollowersCount = async (idSeguido) => {
    return await ConexaoUsuario.count({
        where: {
            idSeguido
        }
    })
}

const getFollowingCount = async (idSeguidor) => {
    return await ConexaoUsuario.count({
        where: {
            idSeguidor
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
    createConexaoUsuario,
    deleteConexaoUsuario,
    isFollowing,
    getFollowersCount,
    getFollowingCount
}