import UsuarioService from "../service/usuario.service.js"

const getUsuarios = async (req, res, next) => {
    try {
        res.send(await UsuarioService.getUsuarios())
    } catch (error) {
        next(error)
    }
}

const getUsuario = async (req, res, next) => {
    try {
        const idUsuario = req.params.idUsuario
        res.send(await UsuarioService.getUsuario(idUsuario))
    } catch (error) {
        next(error)
    }
}

const getUsuarioByUsuario = async (req, res, next) => {
    try {
        const usuario = req.params.usuario
        res.send(await UsuarioService.getUsuarioByUsuario(usuario))
    } catch (error) {
        next(error)
    }
}

const createUsuario = async (req, res, next) => {
    try {
        const usuario = {
            nome: req.body.formNome,
            senha: req.body.formSenha,
            email: req.body.formEmail,
            usuario: req.body.formUsuario,
            avatar: "/public/avatar/" + req.file.filename
        }
        res.status(201).send(await UsuarioService.createUsuario(usuario))
    } catch (error) {
        next(error)
    }
}

const updateUsuario = async (req, res, next) => {
    try {
        const usuarioData = req.body
        console.log("USUARIO DATA:  ", usuarioData)
        res.send(await UsuarioService.updateUsuario(usuarioData))
    } catch (error) {
        next(error)
    }
}

const deleteUsuario = async (req, res, next) => {
    try {
        const usuario = req.params.usuario
        console.log("USUARIOOO", usuario)
        const resultado = await UsuarioService.deleteUsuario(usuario)
        console.log("RESULTADO", resultado)
        res.status(204).send({message: "Usuário excluído com sucesso"})
    } catch (error) {
        next(error)
    }
}

export default {
    getUsuarios,
    getUsuario,
    getUsuarioByUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario
}