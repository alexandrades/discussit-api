import Comentario from "../model/comentario.model.js"
import Usuario from "../model/usuario.model.js"

const getComentarios = async () => {
    return await Comentario.findAll({
        include: [Usuario]
    })
}

const getComentario = async (idComentario) => {
    return await Comentario.findByPk(idComentario)
}

const getComentarioByIdUsuario = async (idUsuario) => {
    return await Comentario.findAll({
        where: {
            idUsuario
        }
    })
}

const getComentarioByIdForum = async (idForum) => {
    return await Comentario.findAll({
        where: {
            idForum
        }
    })
}

const createComentario = async (comentario) => {
    return await Comentario.create(comentario)
}

const updateComentario = async (comentarioData) => {
    return await Comentario.update(comentarioData, {
        where: {
            idComentario: comentarioData.idComentario
        }
    })
}

const deleteComentario = async (idComentario) => {
    return await Comentario.destroy({
        where: {
            idComentario
        }
    })
}

export default {
    getComentario,
    getComentarios,
    createComentario,
    getComentarioByIdUsuario,
    getComentarioByIdForum,
    updateComentario,
    deleteComentario
}