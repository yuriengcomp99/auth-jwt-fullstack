import { Router } from "express"
import { RegisterController } from "../controllers/auth/register.controller.js"

const router = Router()

const registerController = new RegisterController()

router.post("/register", (req, res) => {
  return registerController.handle(req, res)
})

export default router