import { Request, Response } from "express"
import { RegisterUseCase } from "../../use-cases/auth/register.usecase.js"
import { UserRepository } from "../../repositories/user/user.repository.js"

export class RegisterController {
  async handle(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body

      const userRepository = new UserRepository()
      const registerUseCase = new RegisterUseCase(userRepository)

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