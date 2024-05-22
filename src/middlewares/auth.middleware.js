import jwt from 'jsonwebtoken'
import conexaoUsuarioRepository from '../repository/conexaoUsuario.repository.js'
import ForumRepository from '../repository/forum.repository.js'

export const autorizar = (req, res, next) => {
    console.log(req.headers)
    const [authType, token] = req.headers.authorization.split(' ')
    let forum = undefined
    
    if(!token) {
        res.status(401).send({auth: false, message: "Token not provided."})
    }
    
    if(!/^Bearer$/i.test(authType)){
        return res.status(401).send({auth: false, message: "Token malformatted."})
    }
    
    jwt.verify(token, "SEGREDO", async (err, decoded) => {
        if(err){
            res.status(401).send({auth: false, message: "Token invalid."})
        }

        if(decoded.isAdm){
            req.idUsuario = decoded.idUsuario
            return next()
        }

        if(req.params.idForum){
            forum = await ForumRepository.getForum(req.params.idForum)
            console.log("ID passado", req.params.idForum)
            console.log("Forum", forum)
        }

        if((req.body.idForum && req.method == "POST") || (req.params.idForum && req.method == "DELETE")) {
            req.idUsuario = decoded.idUsuario
            return next()
        }

        if(req.params.idSeguido) {
            const seguido = await conexaoUsuarioRepository.isFollowing(decoded.idUsuario, req.params.idSeguido)
            if(!seguido && req.method == "POST") {
                req.idUsuario = decoded.idUsuario
                return next()
            }

            if(seguido && req.method == "DELETE") {
                req.idUsuario = decoded.idUsuario
                return next()
            } 
        }          

        const sameUsuario = req.params.usuario == decoded.usuario || req.body.usuario == decoded.usuario
        const sameIdUsuario = req.params.idUsuario == decoded.idUsuario || req.body.idUsuario == decoded.idUsuario
        const forumOwner = forum?.idUsuario == decoded.idUsuario

        if(sameUsuario || sameIdUsuario || forumOwner){
            req.idUsuario = decoded.idUsuario
            return next()
        }
        
        return res.status(401).send({auth: false, message: "Access denied to this idUsuario."})
    })
}

export const isAdm = (req, res, next) => {
    const [authType, token] = req.headers.authorization.split(' ')

    jwt.verify(token, "SEGREDO", (err, decoded) => {
        if(decoded.isAdm){
            return next()
        }

        return res.status(401).send({auth: false, message: "Access denied."})
    })
}

export default {
    autorizar,
    isAdm
}