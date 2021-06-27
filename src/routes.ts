import { Router } from 'express'
import CreateTagController from './controllers/CreateTagController'
import CreateUserController from './controllers/CreateUserController'
import AuthenticateUserController from './controllers/AuthenticateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import CreateComplimentController from './controllers/CreateComplimentController'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import ListUserReceiveComplimentsController from './controllers/ListUserReceiveComplimentsController'
import ListUserSendComplimentsController from './controllers/ListUserSendComplimentsController'
import ListTagsController from './controllers/ListTagsController'
import ListUsersController from './controllers/ListUsersController'

const router = Router()

router.post('/login',  AuthenticateUserController.handle)
router.post('/users', CreateUserController.handle)

router.use(ensureAuthenticated)

router.get('/users', ListUsersController.handle)
router.post('/tags', ensureAdmin, CreateTagController.handle)
router.get('/tags', ListTagsController.handle)
router.post('/compliments', CreateComplimentController.handle)
router.get('/users/compliments/receive', ListUserReceiveComplimentsController.handle)
router.get('/users/compliments/send', ListUserSendComplimentsController.handle)

export { router }