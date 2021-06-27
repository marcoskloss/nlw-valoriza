import { classToPlain } from "class-transformer"
import { getCustomRepository } from "typeorm"
import { User } from "../entities/User"
import { UserRepository } from "../repositories/UserRepository"

class ListUsersService {
  async execute(): Promise<Record<string, any>> {
    const userRepository = getCustomRepository(UserRepository)
    const users = await userRepository.find()
    return classToPlain(users)
  }
}

export { ListUsersService }