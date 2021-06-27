import { getCustomRepository } from "typeorm"
import { User } from "../entities/User"
import { UserRepository } from "../repositories/UserRepository"
import { hash } from 'bcryptjs'

export interface IUserRequest {
  name: string
  email: string
  password: string
  admin?: boolean
}

class CreateUserService {
  async execute({ 
    name, 
    email, 
    admin = false, 
    password
  }: IUserRequest): Promise<User> {
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

    const passwordHash = await hash(password, 8)

    const user = userRepository.create({
      name,
      email,
      admin,
      password: passwordHash  
    })

    userRepository.save(user)
    return user
  }
} 

export { CreateUserService }