import { makeRegisterController } from "../factories/auth/make-register.js"
import { makeLoginController } from "../factories/auth/make-login.js"

const registerController = makeRegisterController()
const loginController = makeLoginController()

router.post("/register", (req, res) => {
  return registerController.handle(req, res)
})

router.post("/login", (req, res) => {
  return loginController.handle(req, res)
})