import { Router } from "express";
import AuthController from '../controller/auth.controller.js'
import { autorizar } from "../middlewares/auth.middleware.js";

const router = Router()

router.post('/', AuthController.signIn)
router.post('/authenticate', AuthController.getUsuarioData)

export default router