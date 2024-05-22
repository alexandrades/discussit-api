import UsuarioService from '../service/usuario.service.js'
import jwt from 'jsonwebtoken'

export const signIn = async (req, res, next) => {
    try {
        const {usuario, senha} = req.body
        const {idUsuario, isAdm, avatar} = await UsuarioService.signIn(usuario, senha)

        if(idUsuario){
            const token = jwt.sign({idUsuario, usuario, isAdm}, "SEGREDO", {
                expiresIn: 86400
            })
            return res.send({auth: true, token, usuarioData: {idUsuario, usuario, avatar, isAdm}})
        }
    } catch (error) {
        res.status(500).json({message: "Login inválido"})
    }

}

export const getUsuarioData = async (req, res, next) => {
    const [authType, token] = req.headers.authorization.split(' ')
    
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

        console.log(decoded)

        const dados = await UsuarioService.getUsuario(decoded.idUsuario)
    
        res.json({
            idUsuario: dados.idUsuario,
            usuario: dados.usuario,
            nome: dados.nome,
            isAdm: dados.isAdm,
            avatar: dados.avatar
        })
    })
}



export default {
    signIn,
    getUsuarioData
}