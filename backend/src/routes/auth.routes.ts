import { Router } from "express"
import { RegisterController } from "../controllers/auth/register.controller.js"
import { LoginController } from "../controllers/auth/login.controller.js"

const router = Router()

const registerController = new RegisterController()
const loginController = new LoginController()

router.post("/register", (req, res) => {
  return registerController.handle(req, res)
})

router.post("/login", (req, res) => {
  return loginController.handle(req, res)
})

export default router