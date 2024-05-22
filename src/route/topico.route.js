import { Router } from "express";
import TopicoController from "../controller/topico.controller.js";
import { autorizar, isAdm } from "../middlewares/auth.middleware.js";

const router = Router()

router.get('/', TopicoController.getTopicos)
router.get('/:idTopico', TopicoController.getTopico)
router.post('/', isAdm, TopicoController.createTopico)
router.put('/', isAdm, TopicoController.updateTopico)
router.delete('/:idTopico', isAdm, TopicoController.deleteTopico)

export default router