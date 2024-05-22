import ConexaoUsuarioForumService from "../service/conexaoUsuarioForum.service.js"

const getAllFollowers = async (req, res, next) => {
    try {
        const idForum = req.params.idForum
        res.send(await ConexaoUsuarioForumService.getAllFollowers(idForum))
    } catch (error) {
        next(error)
    }
}

const createConexaoUsuarioForum = async (req, res, next) => {
    try {
        const idUsuario = req.idUsuario
        const idForum = req.body.idForum
        res.send(await ConexaoUsuarioForumService.createConexaoUsuarioForum(idUsuario, idForum))
    } catch (error) {
        next(error)
    }
}

const deleteConexaoUsuario = async (req, res, next) => {
    try {
        const idUsuario = req.idUsuario
        const idForum = req.params.idForum
        const rowsAffected = await ConexaoUsuarioForumService.deleteConexaoUsuario(idUsuario, idForum)
        res.send({rowsAffected})
    } catch (error) {
        next(error)
    }
}

const isFollowing = async (req, res, next) => {
    try {
        const idUsuario = req.params.idUsuario
        const idForum = req.params.idForum
        res.send(await ConexaoUsuarioForumService.isFollowing(idUsuario, idForum))
    } catch (error) {
        next(error)
    }
}

const getFollowersCount = async (req, res, next) => {
    try {
        const idForum = req.params.idForum
        const followersCount = await ConexaoUsuarioForumService.getFollowersCount(idForum)
        res.status(200).send({followersCount})
    } catch (error) {
        next(error)
    }
}

const getFollowingCount = async (req, res, next) => {
    try {
        const idUsuairo = req.params.idUsuario
        const followingCount = await ConexaoUsuarioForumService.getFollowersCount(idUsuairo)
        res.status(200).send({followingCount})
    } catch (error) {
        next(error)
    }
}


export default {
    getAllFollowers,
    createConexaoUsuarioForum,
    deleteConexaoUsuario,
    isFollowing,
    getFollowersCount,
    getFollowingCount
}