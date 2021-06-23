import { Router } from 'express'
import CreateTagController from './controllers/CreateTagController'
import CreateUserController from './controllers/CreateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'

const router = Router()

router.post('/users', CreateUserController.handle)
router.post('/tags', ensureAdmin, CreateTagController.handle)

export { router }