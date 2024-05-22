import ConexaoUsuarioRepository from '../repository/conexaoUsuario.repository.js'

const getAllFollowers = async (idSeguido) => {
    return await ConexaoUsuarioRepository.getAllFollowers(idSeguido)
}

const createConexaoUsuario = async (idSeguidor, idSeguido) => {
    return await ConexaoUsuarioRepository.createConexaoUsuario(idSeguidor, idSeguido) 
}

const isFollowing = async (idSeguidor, idSeguido) => {
    if(await ConexaoUsuarioRepository.isFollowing(idSeguidor, idSeguido)) {
        return true
    }

    return false
}

const deleteConexaoUsuario = async (idSeguidor, idSeguido) => {
    return await ConexaoUsuarioRepository.deleteConexaoUsuario(idSeguidor, idSeguido)
}

const getFollowersCount = async (idSeguido) => {
    return await ConexaoUsuarioRepository.getFollowersCount(idSeguido)
}

const getFollowingCount = async (idSeguidor) => {
    return await ConexaoUsuarioRepository.getFollowingCount(idSeguidor)
}

export default {
    getAllFollowers,
    createConexaoUsuario,
    deleteConexaoUsuario,
    isFollowing,
    getFollowersCount,
    getFollowingCount
}