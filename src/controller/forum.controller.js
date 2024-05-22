import ConexaoUsuarioService from "../service/conexaoUsuario.service.js"
import ForumService from "../service/forum.service.js"

    // getForuns,
    // getForum,
    // createForum,
    // getForumByIdUsuario,
    // getForumByTitulo,
    // updateForum,
    // deleteForum

const getForuns = async (req, res, next) => {
    try {
        let r = await ForumService.getForuns()
        console.log("RESPONSE==================================================", r)
        res.send(r)
    } catch (error) {
        next(error)
    }
}

const getForum = async (req, res, next) => {
    try {
        const idForum = req.params.idForum
        res.send(await ForumService.getForum(idForum))
    } catch (error) {
        next(error)
    }
}

const getForumByIdUsuario = async (req, res, next) => {
    try {
        const idUsuario = req.params.idUsuario
        res.send(await ForumService.getForumByIdUsuario(idUsuario))
    } catch (error) {
        next(error)
    }
}

const getForumByUsuario = async (req, res, next) => {
    try {
        const usuario = req.params.usuario
        res.send(await ForumService.getForumByUsuario(usuario))
    } catch (error) {
        next(error)
    }
}

const getForumByTitulo = async (req, res, next) => {
    try {
        const titulo = req.query.titulo
        res.send(await ForumService.getForumByTitulo(titulo))
    } catch (error) {
        next(error)
    }
}
const createForum = async (req, res, next) => {
    try {
        const forum = req.body
        res.status(201).send(await ForumService.createForum(forum))
    } catch (error) {
        next(error)
    }
}

const updateForum = async (req, res, next) => {
    try {
        const forumData = req.body
        res.send(await ForumService.updateForum(forumData))
    } catch (error) {
        next(error)
    }
}

const deleteForum = async (req, res, next) => {
    try {
        const idForum = req.params.idForum
        console.log(idForum)
        await ForumService.deleteForum(idForum)
        res.sendStatus(204)
    } catch (error) {
        next(error)
    }
}

const includeFollowersForuns = async (req, res, next) => {
    try {
        const idSeguido = req.params.idSeguido
        res.send(await ForumService.includeFollowersForuns(idSeguido))
    } catch (error) {
        next(error)
    }
}

const getRanking = async (req, res, next) => {
    try {
        res.send(await ForumService.getRanking())
    } catch (error) {
        next(error)
    }
}

export default {
    getForuns,
    getForum,
    getForumByIdUsuario,
    getForumByUsuario,
    getForumByTitulo,
    createForum,
    updateForum,
    deleteForum,
    includeFollowersForuns,
    getRanking
}