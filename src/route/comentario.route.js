import { Router } from "express";
import ComentarioController from "../controller/comentario.controller.js";
import { autorizar } from "../middlewares/auth.middleware.js";

const router = Router()

router.get('/', ComentarioController.getComentarios)
router.get('/:idComentario', ComentarioController.getComentario)
router.post('/', ComentarioController.createComentario)
router.put('/', ComentarioController.updateComentario)
router.delete('/:idComentario', ComentarioController.deleteComentario)

export default router