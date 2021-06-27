import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository";

class ListTagsService {
  async execute(): Promise<Record<string, any>> {
    const tagRepository = getCustomRepository(TagRepository)
    const tags = await tagRepository.find()
    return classToPlain(tags)
  }
}

export { ListTagsService }