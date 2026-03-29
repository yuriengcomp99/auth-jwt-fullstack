import { Router } from "express"
import { makeUpdateUserController } from "../factories/make-update-user-controller.js"
import { authMiddleware } from '../middlewares/auth.middleware.js'

const router = Router()

const updateUserController = makeUpdateUserController()

router.patch("/:id", authMiddleware, (req, res) => {
  return updateUserController.handle(req, res)
})

export default router