import { Request, Response } from "express"
import { makeLoginUseCase } from "../../factories/auth/make-login.js"

export class LoginController {
  async handle(req: Request, res: Response) {
    try {
      const { email, password } = req.body

      const loginUseCase = makeLoginUseCase()

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