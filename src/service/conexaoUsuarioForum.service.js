import ConexaoUsuarioForumRepository from "../repository/conexaoUsuarioForum.repository.js"

const getAllFollowers = async (idForum) => {
    return await ConexaoUsuarioForumRepository.getAllFollowers(idForum)
}

const createConexaoUsuarioForum = async (idUsuario, idForum) => {
    return await ConexaoUsuarioForumRepository.createConexaoUsuarioForum(idUsuario, idForum)
}

const deleteConexaoUsuario = async (idUsuario, idForum) => {
    return await ConexaoUsuarioForumRepository.deleteConexaoUsuario(idUsuario, idForum)
}

const isFollowing = async (idUsuario, idForum) => {
    if(await ConexaoUsuarioForumRepository.isFollowing(idUsuario, idForum)) {
        return true
    }
    
    return false
}

const getFollowersCount = async (idForum) => {
    return await ConexaoUsuarioForumRepository.getFollowersCount(idForum)
}

const getFollowingCount = async (idUsuario) => {
    return await ConexaoUsuarioForumRepository.getFollowingCount(idUsuario)
}

export default {
    getAllFollowers,
    createConexaoUsuarioForum,
    deleteConexaoUsuario,
    isFollowing,
    getFollowersCount,
    getFollowingCount
}