import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listUserSendComplimentsService = new ListUserSendComplimentsService()
    const compliments = await listUserSendComplimentsService.execute(req.user_id)

    return res.json(compliments)
  }
}

export default new ListUserSendComplimentsController()