import 'reflect-metadata'
import './database'
import 'express-async-errors'
import { router } from './routes'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'

const PORT = 3000
const app = express()
app.use(cors())

app.use(express.json())
app.use(router)
 
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    console.log('Erro: ', err.message)
    console.log('Stack: ', err.stack)
    return res.status(400).json({ error: err.message })
  } 

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })
})

app.listen(PORT, () => {
  console.log('Server is running 🔥')
})