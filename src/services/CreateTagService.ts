import { getCustomRepository } from "typeorm"
import { TagRepository } from "../repositories/TagRepository"
import { Tag } from "../entities/Tag"

class CreateTagService {
  async execute(name: string): Promise<Tag> {
    if (!name) throw new Error('Invalid name')
    
    const tagRepository = getCustomRepository(TagRepository)

    const tagAlreadyExists = await tagRepository.findOne({
      name
    })

    if (tagAlreadyExists) throw new Error('Tag already exists')

    const tag = tagRepository.create({
      name
    })
    tagRepository.save(tag)
    return tag
  }
}

export { CreateTagService }