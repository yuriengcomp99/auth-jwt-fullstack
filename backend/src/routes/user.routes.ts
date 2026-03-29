import { Router } from "express"
import { makeUpdateUserController } from "../factories/make-update-user-controller.js"
import { authMiddleware } from '../middlewares/auth.middleware.js'
import { makeDeleteUserController } from "../factories/make-delete-user-controller.js"

const router = Router()

const updateUserController = makeUpdateUserController()
const deleteUserController = makeDeleteUserController()

router.patch("/:id", authMiddleware, (req, res) => {
  return updateUserController.handle(req, res)
})

router.delete("/delete", authMiddleware, (req, res) => {
  return deleteUserController.handle(req, res)
})


export default router