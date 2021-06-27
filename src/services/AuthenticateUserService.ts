import { getCustomRepository } from "typeorm"
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { UserRepository } from "../repositories/UserRepository"

interface IAuthenticateUserService {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ password, email }: IAuthenticateUserService): Promise<string> {
    const userRepository = getCustomRepository(UserRepository)

    const user = await userRepository.findOne({ email })
    if (!user) throw new Error('Email/Password incorrect') 

    const passwordMatch = await compare(password, user.password)
    if (!passwordMatch) throw new Error('Email/Password incorrect') 
     
    const token = sign(
      { email:  user.email },
      process.env.TOKEN_SECRET_KEY,
      {
        subject: user.id,
        expiresIn:  '1d'
      }
    )

    return token
  }
}

export { AuthenticateUserService }