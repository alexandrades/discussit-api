import { Router } from "express";
import ForumController from "../controller/forum.controller.js";
import { autorizar } from "../middlewares/auth.middleware.js";

const router = Router()

router.get('/ranking', ForumController.getRanking)
router.get('/', ForumController.getForuns)
router.get('/:idUsuario/all', ForumController.getForumByIdUsuario)
router.get('/:idSeguido/followers', ForumController.includeFollowersForuns)
router.get('/titulo', ForumController.getForumByTitulo)
router.get('/:idForum', ForumController.getForum)
router.post('/', ForumController.createForum)
router.put('/', autorizar, ForumController.updateForum)
router.delete('/:idForum', autorizar, ForumController.deleteForum)

export default router