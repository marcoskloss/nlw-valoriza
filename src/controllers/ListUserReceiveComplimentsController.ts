import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listUserReceiveComplimentsService = 
      new ListUserReceiveComplimentsService()
      
    const compliments = await listUserReceiveComplimentsService.execute(
      req.user_id
    )

    return res.json(compliments)
  }
}

export default new ListUserReceiveComplimentsController()