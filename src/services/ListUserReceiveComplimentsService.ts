import { getCustomRepository } from "typeorm"
import { Compliment } from "../entities/Compliment"
import { ComplimentRepository } from "../repositories/ComplimentRepository"

class ListUserReceiveComplimentsService {
  async execute(user_id: string): Promise<Compliment[]> {
    const complimentRepository = getCustomRepository(ComplimentRepository)
    const compliments = await complimentRepository.find({
      where: { user_receiver: user_id },
      relations: ['userSender', 'userReceiver', 'tag'],
    })

    return compliments
  }
}

export { ListUserReceiveComplimentsService }