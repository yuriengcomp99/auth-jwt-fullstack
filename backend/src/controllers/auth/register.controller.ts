import { Request, Response } from "express"
import { makeRegisterUseCase } from "../../factories/auth/make-register.js"

export class RegisterController {
  async handle(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body

      const registerUseCase = makeRegisterUseCase()

      const user = await registerUseCase.execute({
        name,
        email,
        password
      })

      return res.status(201).json(user)

    } catch (error: any) {
      return res.status(400).json({
        error: error.message
      })
    }
  }
}