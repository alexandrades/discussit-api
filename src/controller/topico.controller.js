import TopicoService from "../service/topico.service.js"

const getTopicos = async (req, res, next) => {
    try {
        let respondse = await TopicoService.getTopicos()
        console.log("RESPONSE", respondse)
        res.send(respondse)
    } catch (error) {
        next(error)
    }
}

const getTopico = async (req, res, next) => {
    try {
        const idTopico = req.params.idTopico
        res.send(await TopicoService.getTopico(idTopico))
    } catch (error) {
        next(error)
    }
}

const createTopico = async (req, res, next) => {
    try {
        const topico = req.body
        res.status(201).send(await TopicoService.createTopico(topico))
    } catch (error) {
        next(error)
    }
}

const updateTopico = async (req, res, next) => {
    try {
        const topicoData = req.body
        res.send(await TopicoService.updateTopico(topicoData))
    } catch (error) {
        next(error)
    }
}

const deleteTopico = async (req, res, next) => {
    try {
        const idTopico = req.params.idTopico
        await TopicoService.deleteTopico(idTopico)
        res.sendStatus(204)
    } catch (error) {
        next(error)
    }
}

export default {
    getTopicos,
    getTopico,
    createTopico,
    updateTopico,
    deleteTopico
}