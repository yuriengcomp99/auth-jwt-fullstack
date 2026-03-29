import { Router } from "express"
import { makeUpdateUserController } from "../factories/make-update-user-controller.js"

const router = Router()

const updateUserController = makeUpdateUserController()

router.patch("/:id", (req, res) => {
  return updateUserController.handle(req, res)
})

export default router