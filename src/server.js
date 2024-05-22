import express from 'express'
import winston from 'winston'
import cors from 'cors'

import UsuarioRouter from './route/usuario.route.js'
import AuthRouter from './route/auth.route.js'
import ForumRouter from './route/forum.route.js'
import ComentarioRouter from './route/comentario.route.js'
import TopicoRouter from './route/topico.route.js'
import ConexaoUsuarioRouter from './route/conexaoUsuario.route.js'
import ConexaoUsuarioForumRouter from './route/conexaoUsuarioForum.route.js'

import db from './model/db.js'
import Usuario from './model/usuario.model.js'
import Forum from './model/forum.model.js'
import ConexaoUsuario from './model/conexaoUsuario.model.js'
import Comentario from './model/comentario.model.js'
import Topico from './model/topico.model.js'
import ConexaoUsuarioForum from './model/conexaoUsuarioForum.model.js'

const { combine, timestamp, label, printf } = winston.format
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`
})
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'discussit-api.log' })
    ],
    format: combine(
        label({ label: 'discussit-api' }),
        timestamp(), myFormat
    )
})

const app = express()


app.use(express.json())
app.use("/public", express.static('uploads'))
app.use(cors({
    origin: "*"
}))

// DB Sync

Usuario.belongsToMany(Forum, {through: 'conexao_usuario_forum', onDelete: 'cascade'})
Forum.belongsToMany(Usuario, {through: 'conexao_usuario_forum', onDelete: 'cascade'})
db.sync()
Usuario.sync({alter: true})
Forum.sync({alter: true})
Comentario.sync({alter: true})
Topico.sync({alter: true})
// ConexaoUsuario.sync({alter: true})
ConexaoUsuarioForum.sync({alter: true})



// Routes
app.use("/sign", AuthRouter)
app.use("/forum", ForumRouter)
app.use("/comentario", ComentarioRouter)
app.use("/topico", TopicoRouter)
app.use("/conexao", ConexaoUsuarioRouter)
app.use("/conexao-usuario-forum", ConexaoUsuarioForumRouter)
app.use(UsuarioRouter)

app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`)
    res.status(400).send({ error: err.message })
})

app.listen(3001, () => {
    console.log("Server is running.")
})