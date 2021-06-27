import { getCustomRepository } from "typeorm"
import { ComplimentRepository } from "../repositories/ComplimentRepository"
import { UserRepository } from "../repositories/UserRepository"

interface IComplimentRequest {
  tag_id: string
  user_sender: string
  user_receiver: string
  message: string
}

class CreateComplimentService {
  async execute({ 
    message, 
    tag_id, 
    user_receiver, 
    user_sender }: IComplimentRequest
  ) {
    const userRepository = getCustomRepository(UserRepository)
    const userReceiver = await userRepository.findOne(user_receiver)

    if (!userReceiver) throw new Error('User receiver does not exist')
    
    if (user_sender === user_receiver) {
      throw new Error('The sender and receiver must be different')
    }

    const complimentRepository = getCustomRepository(ComplimentRepository)
    const compliment = complimentRepository.create({
      message,
      tag_id,
      user_receiver,
      user_sender
    })
    await complimentRepository.save(compliment)
    return compliment
  }
}

export { CreateComplimentService }