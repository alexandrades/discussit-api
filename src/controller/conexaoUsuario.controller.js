import ConexaoUsuarioService from "../service/conexaoUsuario.service.js"

const getAllFollowers = async (req, res, next) => {
    const idSeguido = req.params.idSeguido

    try {
        res.send(await ConexaoUsuarioService.getAllFollowers(idSeguido))
    } catch (error) {
        next(error)
    }
}

const createConexaoUsuario = async (req, res, next) => {
    const idSeguidor = req.idUsuario
    const idSeguido = req.params.idSeguido

    try {
        res.send(await ConexaoUsuarioService.createConexaoUsuario(idSeguidor, idSeguido))
    } catch (error) {
        next(error)
    }
}

const isFollowing = async (req, res, next) => {
    const idSeguidor = req.params.idSeguidor
    const idSeguido = req.params.idSeguido

    try {
        res.send(await ConexaoUsuarioService.isFollowing(idSeguidor, idSeguido))
    } catch (error) {
        next(error)
    }
}

const deleteConexaoUsuario = async (req, res, next) => {
    try {
        const idSeguidor = req.idUsuario
        const idSeguido = req.params.idSeguido
        const resultado = await ConexaoUsuarioService.deleteConexaoUsuario(idSeguidor, idSeguido)
        res.sendStatus(204)
    } catch (error) {
        next(error)
    }
}

const getFollowersCount = async (req, res, next) => {
    try {
        const idSeguido = req.params.idSeguido
        const followersCount = await ConexaoUsuarioService.getFollowersCount(idSeguido)
        res.status(200).send({followersCount})
    } catch (error) {
        next(error)
    }
}

const getFollowingCount = async (req, res, next) => {
    try {
        const idSeguidor = req.params.idSeguidor
        const followingCount = await ConexaoUsuarioService.getFollowingCount(idSeguidor)
        res.status(200).send({followingCount})
    } catch (error) {
        next(error)
    }
}

// const getUsuario = async (req, res, next) => {
//     try {
//         const idUsuario = req.params.idUsuario
//         res.send(await UsuarioService.getUsuario(idUsuario))
//     } catch (error) {
//         next(error)
//     }
// }

// const getUsuarioByUsuario = async (req, res, next) => {
//     try {
//         const usuario = req.params.usuario
//         res.send(await UsuarioService.getUsuarioByUsuario(usuario))
//     } catch (error) {
//         next(error)
//     }
// }

// const createUsuario = async (req, res, next) => {
//     try {
//         const usuario = {
//             nome: req.body.formNome,
//             senha: req.body.formSenha,
//             email: req.body.formEmail,
//             usuario: req.body.formUsuario,
//             avatar: "/public/avatar/" + req.file.filename
//         }
//         res.status(201).send(await UsuarioService.createUsuario(usuario))
//     } catch (error) {
//         next(error)
//     }
// }

// const updateUsuario = async (req, res, next) => {
//     try {
//         const usuarioData = req.body
//         console.log("USUARIO DATA:  ", usuarioData)
//         res.send(await UsuarioService.updateUsuario(usuarioData))
//     } catch (error) {
//         next(error)
//     }
// }

// const deleteUsuario = async (req, res, next) => {
//     try {
//         const usuario = req.params.usuario
//         console.log("USUARIOOO", usuario)
//         const resultado = await UsuarioService.deleteUsuario(usuario)
//         console.log("RESULTADO", resultado)
//         res.status(204).send({message: "Usuário excluído com sucesso"})
//     } catch (error) {
//         next(error)
//     }
// }

export default {
    getAllFollowers,
    createConexaoUsuario,
    isFollowing,
    deleteConexaoUsuario,
    getFollowersCount,
    getFollowingCount
}