import Sequelize from 'sequelize'
import ComentarioRepository from '../repository/comentario.repository.js'
import ForumRepository from '../repository/forum.repository.js'

const getComentarios = async () => {
    return await ComentarioRepository.getComentarios()
}

const getComentario = async (idComentario) => {
    return await ComentarioRepository.getComentario(idComentario) 
}

const getComentarioByIdUsuario = async (idUsuario) => {
    return await ComentarioRepository.getComentarioByIdUsuario(idUsuario) 
}

const getComentarioByIdForum = async (idForum) => {
    return await ComentarioRepository.getComentarioByIdForum(idForum)
    
}

const createComentario = async (comentario) => {
    const forum = await ForumRepository.updateForum({
        idForum: comentario.idForum,
        updatedAt: Sequelize.fn("NOW")
    })
    return await ComentarioRepository.createComentario(comentario)
}

const updateComentario = async (comentarioData) => {
    return await ComentarioRepository.updateComentario(comentarioData)
}

const deleteComentario = async (idComentario) => {
    return await ComentarioRepository.deleteComentario(idComentario)
}

export default {
    getComentario,
    getComentarios,
    getComentarioByIdUsuario,
    getComentarioByIdForum,
    createComentario,
    deleteComentario,
    updateComentario,
}