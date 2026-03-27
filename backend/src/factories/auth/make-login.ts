import { UserRepository } from "../../repositories/user/user.repository.js"
import { LoginUseCase } from "../../use-cases/auth/login.usecase.js"

export function makeLoginUseCase() {
  const userRepository = new UserRepository()

  const loginUseCase = new LoginUseCase(userRepository)

  return loginUseCase
}