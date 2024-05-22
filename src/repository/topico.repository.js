import Forum from "../model/forum.model.js"
import Topico from "../model/topico.model.js"

const getTopicos = async () => {
    return await Topico.findAll({
        include: {
            model: Forum,
            attributes: ['idForum', 'titulo', 'idUsuario', 'createdAt', 'updatedAt']
        }
    })
}

const getTopico = async (idTopico) => {
    return await Topico.findByPk(idTopico, {
        include: {
            model: Forum,
            attributes: ['idForum', 'titulo', 'idUsuario', 'createdAt', 'updatedAt']
        }
    })
}

const getTopicoByNome = async (nome) =>{
    return await Topico.findOne({
        where: {
            nome
        },
        include: {
            model: Forum,
            attributes: ['idForum', 'titulo', 'idUsuario', 'createdAt', 'updatedAt']
        }
    })
}

const createTopico = async (topico) => {
    return await Topico.create(topico)
}

const updateTopico = async (topicoData) => {
    return await Topico.update(topicoData, {
        where: {
            idTopico: topicoData.idTopico
        }
    })
}

const deleteTopico = async (idTopico) => {
    return await Topico.destroy({
        where: {
            idTopico
        }
    })
}

export default {
    getTopicos,
    getTopico,
    getTopicoByNome,
    createTopico,
    updateTopico,
    deleteTopico
}