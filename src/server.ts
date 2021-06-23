import 'reflect-metadata'
import './database'

import { router } from './routes'
import express from 'express'

const PORT = 3000
const app = express()

app.use(express.json())
app.use(router)
 
app.listen(PORT, () => {
  console.log('Server is running 🔥')
})