import { Router } from "express";
import ConexaoUsuarioForumController from "../controller/conexaoUsuarioForum.controller.js";
import { autorizar } from "../middlewares/auth.middleware.js";

const router = Router()

router.get('/followers/:idForum/count', ConexaoUsuarioForumController.getFollowersCount)
router.get('/following/:idUsuario/count', ConexaoUsuarioForumController.getFollowingCount)
router.get('/followers/:idForum', ConexaoUsuarioForumController.getAllFollowers)
router.post('/:idUsuario/:idForum', ConexaoUsuarioForumController.isFollowing)
router.post('/', autorizar, ConexaoUsuarioForumController.createConexaoUsuarioForum)
router.delete('/:idForum', autorizar, ConexaoUsuarioForumController.deleteConexaoUsuario)

export default router