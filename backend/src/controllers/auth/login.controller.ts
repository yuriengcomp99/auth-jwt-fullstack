import { Request, Response } from "express"
import { LoginUseCase } from "../../use-cases/auth/login.usecase.js"
import { UserRepository } from "../../repositories/user/user.repository.js"

export class LoginController {
  async handle(req: Request, res: Response) {
    try {
      const { email, password } = req.body

      const userRepository = new UserRepository()
      const loginUseCase = new LoginUseCase(userRepository)

      const result = await loginUseCase.execute({
        email,
        password
      })

      return res.json(result)

    } catch (error: any) {
      return res.status(401).json({
        error: error.message
      })
    }
  }
}