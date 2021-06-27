import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {
  async handle( req: Request ,res: Response): Promise<Response> {
    const { 
      tag_id,
      user_receiver,
      message
    } = req.body;

    const createComplimentService = new CreateComplimentService()
    const compliment = await createComplimentService.execute({
      message,
      tag_id,
      user_receiver,
      user_sender: req.user_id
    })

    return res.json(compliment)
  }
}

export default new CreateComplimentController()