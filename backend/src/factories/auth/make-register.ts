import { UserRepository } from "../../repositories/user/user.repository.js"
import { RegisterUseCase } from "../../use-cases/auth/register.usecase.js"

export function makeRegisterUseCase() {
  const userRepository = new UserRepository()

  const registerUseCase = new RegisterUseCase(userRepository)

  return registerUseCase
}