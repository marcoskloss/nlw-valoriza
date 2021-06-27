import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

export async function ensureAdmin(
  req: Request, 
  res: Response, 
  next: NextFunction
) {
  const userRepository = getCustomRepository(UserRepository)
  const { admin } = await userRepository.findOne(req.user_id)

  if (admin) return next()

  return res.status(401).json({ error: 'Unauthorized' })
}