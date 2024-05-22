import { Router } from "express";
import forumController from "../controller/forum.controller.js";
import UsuarioController from "../controller/usuario.controller.js";
import { autorizar } from "../middlewares/auth.middleware.js";
import multer from 'multer'

const router = Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/avatar')
    },
    filename: (req, file, cb) => {
        const prefix = Date.now()
        cb(null, prefix + "_" + file.originalname)
    }
})

const upload = multer({storage: storage})

router.get('/usuario', UsuarioController.getUsuarios)
router.get('/:usuario', UsuarioController.getUsuarioByUsuario)
router.get('/usuario/:idUsuario', UsuarioController.getUsuario)
router.post('/usuario', upload.single('formAvatar') , UsuarioController.createUsuario)
router.put('/usuario', autorizar, UsuarioController.updateUsuario)
router.delete('/:usuario', autorizar, UsuarioController.deleteUsuario)
router.get('/:usuario/forum', forumController.getForumByUsuario)
router.get('/:usuario/forum/:titulo', forumController.getForumByTitulo)

export default router