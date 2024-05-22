import { Router } from "express";
import { autorizar } from "../middlewares/auth.middleware.js";
import ConexaoUsuarioController from "../controller/conexaoUsuario.controller.js";

const router = Router()

router.get('/followers/:idSeguido/count', ConexaoUsuarioController.getFollowersCount)
router.get('/following/:idSeguidor/count', ConexaoUsuarioController.getFollowingCount)
router.get('/followers/:idSeguido', ConexaoUsuarioController.getAllFollowers)
router.post('/:idSeguido', autorizar, ConexaoUsuarioController.createConexaoUsuario)
router.delete('/:idSeguido', autorizar, ConexaoUsuarioController.deleteConexaoUsuario)
router.post('/:idSeguidor/:idSeguido', ConexaoUsuarioController.isFollowing)

export default router