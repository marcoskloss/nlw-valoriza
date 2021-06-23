import { getCustomRepository } from "typeorm"
import { User } from "../entities/User"
import { UserRepository } from "../repositories/UserRepository"

export interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest): Promise<User> {
    if (!email) {
      throw new Error('Email incorrect')
    }
    
    const userRepository = getCustomRepository(UserRepository)
    const userAlreadyExists = await userRepository.findOne({
      email
    })

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const user = userRepository.create({
      name,
      email,
      admin
    })

    userRepository.save(user)
    return user
  }
} 

export { CreateUserService }