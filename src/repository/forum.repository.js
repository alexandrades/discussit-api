import db from "../model/db.js"
import Comentario from "../model/comentario.model.js"
import Forum from "../model/forum.model.js"
import Topico from "../model/topico.model.js"
import Usuario from "../model/usuario.model.js"
import ConexaoUsuarioRepository from "./conexaoUsuario.repository.js"
import { Op } from "sequelize"

const getForuns = async () => {
    return await Forum.findAll({
        include: [{
            model: Usuario,
            attributes: ['idUsuario', 'usuario', 'nome']
        }, {
            model: Comentario,
            attributes: ['idComentario', 'conteudo', 'idUsuario', 'createdAt', 'updatedAt']
        }, {
            model: Topico
        }],
        order: [
            ["updatedAt", "DESC"]
        ]
    })
}

const getForum = async (idForum) => {
    return await Forum.findByPk(idForum, {
        include: [{
            model: Usuario,
            attributes: ['idUsuario', 'usuario', 'nome']
        }, {
            model: Comentario,
            attributes: ['idComentario', 'idForum', 'conteudo', 'createdAt', 'updatedAt'],
            include: [{
                model: Usuario,
                attributes: ['idUsuario', 'nome', 'usuario', 'avatar']
            }]
        }]
    })
}

const getForumByIdUsuario = async (idUsuario) => {
    return await Forum.findAll({
        where: {
            idUsuario
        },
        include: [{
            model: Usuario,
            attributes: ['idUsuario', 'usuario', 'nome']
        }, {
            model: Comentario,
            attributes: ['idComentario', 'conteudo', 'idUsuario', 'createdAt', 'updatedAt']
        }, {
            model: Topico
        }],
        order: [
            ["updatedAt", "DESC"]
        ]
    })
}

const getForumByUsuario = async (usuario) => {
    return await Forum.findAll({
        where: {
            usuario
        },
        include: [{
            model: Usuario,
            attributes: ['idUsuario', 'usuario', 'nome']
        }, {
            model: Comentario,
            attributes: ['idComentario', 'conteudo', 'idUsuario', 'createdAt', 'updatedAt']
        }],
        order: [
            ["idForum", "DESC"]
        ]
    })
}

const getForumByTitulo = async (titulo) => {
    return await Forum.findOne({
        where: {
            titulo
        },
        include: [{
            model: Usuario,
            attributes: ['idUsuario', 'usuario', 'nome']
        }, {
            model: Comentario,
            attributes: ['idComentario', 'conteudo', 'idUsuario', 'createdAt', 'updatedAt']
        }]
    })
}

const createForum = async (forum) => {
    return await Forum.create(forum)
}

const updateForum = async (forumData) => {
    return await Forum.update(forumData, {
        where: {
            idForum: forumData.idForum
        }
    })
}

const deleteForum = async (idForum) => {
    return await Forum.destroy({
        where: {
            idForum
        }
    })
}

const includeFollowersForuns = async (idSeguido) => {

    return await db.query(`SELECT f.id_forum as 'idForum', f.titulo as 'titulo', f.id_usuario as 'idUsuario', f.created_at as 'createdAt', f.updated_at as 'updatedAt', u.usuario 
    FROM forum f 
    INNER JOIN usuario u ON f.id_usuario = u.id_usuario
    WHERE f.id_usuario = 22 
    OR f.id_usuario IN ( 
        SELECT id_seguido FROM conexao_usuario WHERE conexao_usuario.id_seguidor = 22 
    )
    OR f.id_forum IN (
        SELECT forum_id_forum FROM conexao_usuario_forum WHERE conexao_usuario_forum.usuario_id_usuario = 22
    )
    ORDER BY updatedAt DESC;`, { 
        type: db.QueryTypes.SELECT
      })
}

const getRanking = async () => {
    return await db.query(`SELECT COUNT(f.id_forum), f.id_forum as 'idForum', f.titulo as 'titulo', f.id_usuario as 'idUsuario', f.created_at as 'createdAt', f.updated_at as 'updatedAt', u.usuario FROM forum f INNER JOIN usuario u INNER JOIN conexao_usuario_forum c ON f.id_forum = c.forum_id_forum GROUP BY c.forum_id_forum ORDER BY COUNT(f.id_forum) DESC;`, {
        type: db.QueryTypes.SELECT,
        include: [Usuario]
    })
}

export default {
    getForuns,
    getForum,
    createForum,
    getForumByIdUsuario,
    getForumByUsuario,
    getForumByTitulo,
    updateForum,
    deleteForum,
    includeFollowersForuns,
    getRanking
}