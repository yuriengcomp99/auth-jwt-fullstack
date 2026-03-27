import { makeRegisterController } from "../factories/auth/make-register.js"
import { makeLoginController } from "../factories/auth/make-login.js"
import { Router } from "express"

const registerController = makeRegisterController()
const loginController = makeLoginController()
const router = Router()

router.post("/register", (req, res) => {
  return registerController.handle(req, res)
})

router.post("/login", (req, res) => {
  return loginController.handle(req, res)
})

export default router