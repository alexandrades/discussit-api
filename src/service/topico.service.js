import TopicoRepository from '../repository/topico.repository.js'

const getTopicos = async () => {
    return await TopicoRepository.getTopicos()
}

const getTopico = async (idTopico) => {
    return await TopicoRepository.getTopico(idTopico) 
}

const createTopico = async (topico) => {
    const topicoExists = await TopicoRepository.getTopicoByNome(topico.nome)

    if(topicoExists){
        throw new Error("Tópico já cadastrado.")
    }

    return await TopicoRepository.createTopico(topico)
}

const updateTopico = async (topicoData) => {
    return await TopicoRepository.updateTopico(topicoData)
}

const deleteTopico = async (idTopico) => {
    return await TopicoRepository.deleteTopico(idTopico)
}

export default {
    getTopicos,
    getTopico,
    createTopico,
    updateTopico,
    deleteTopico
}