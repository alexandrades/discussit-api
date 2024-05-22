import ComentarioService from "../service/comentario.service.js"

const getComentarios = async (req, res, next) => {
    try {
        res.send(await ComentarioService.getComentarios())
    } catch (error) {
        next(error)
    }
}

const getComentario = async (req, res, next) => {
    try {
        const idComentario = req.params.idComentario
        res.send(await ComentarioService.getComentario(idComentario))
    } catch (error) {
        next(error)
    }
}

const getComentarioByIdUsuario = async (req, res, next) => {
    try {
        const idUsuario = req.params.idUsuario
        res.send(await ComentarioService.getComentarioByIdUsuario(idUsuario))
    } catch (error) {
        next(error)
    }
}

const getComentarioByIdForum = async (req, res, next) => {
    try {
        const idForum = req.params.idForum
        res.send(await ComentarioService.getComentarioByIdForum(idForum))
    } catch (error) {
        next(error)
    }
}

const createComentario = async (req, res, next) => {
    try {
        const comentario = req.body
        res.status(201).send(await ComentarioService.createComentario(comentario))
    } catch (error) {
        next(error)
    }
}

const updateComentario = async (req, res, next) => {
    try {
        const comentarioData = req.body
        res.send(await ComentarioService.updateComentario(comentarioData))
    } catch (error) {
        next(error)
    }
}

const deleteComentario = async (req, res, next) => {
    try {
        const idComentario = req.params.idComentario
        await ComentarioService.deleteComentario(idComentario)
        res.sendStatus(204)
    } catch (error) {
        next(error)
    }
}

export default {
    getComentarios,
    getComentario,
    getComentarioByIdUsuario,
    getComentarioByIdForum,
    createComentario,
    updateComentario,
    deleteComentario,
}