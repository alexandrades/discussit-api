import ForumRepository from '../repository/forum.repository.js'
import UsuarioRepository from '../repository/usuario.repository.js'

const getForuns = async () => {
    return await ForumRepository.getForuns()
}

const getForum = async (idForum) => {
    return await ForumRepository.getForum(idForum) 
}

const getForumByIdUsuario = async (idUsuario) => {
    return await ForumRepository.getForumByIdUsuario(idUsuario) 
}

const getForumByUsuario = async (usuario) => {
    const usuarioData = await UsuarioRepository.getUsuarioByUsuario(usuario)
    return await ForumRepository.getForumByIdUsuario(usuarioData.idUsuario)
    
}

const getForumByTitulo = async (titulo) => {
    return await ForumRepository.getForumByTitulo(titulo)
}

const createForum = async (forum) => {
    const forumExists = await ForumRepository.getForumByTitulo(forum.titulo)

    if(forumExists){
        throw new Error("Titulo já cadastrado")
    }

    return await ForumRepository.createForum(forum)
}

const updateForum = async (ForumData) => {
    return await ForumRepository.updateForum(ForumData)
}

const deleteForum = async (idForum) => {
    return await ForumRepository.deleteForum(idForum)
}

const includeFollowersForuns = async (idSeguido) => {
    return await ForumRepository.includeFollowersForuns(idSeguido)
}

const getRanking = async () => {
    return await ForumRepository.getRanking()
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