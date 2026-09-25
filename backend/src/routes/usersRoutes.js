import express from 'express'
import { deleteUserController, getAllUsersController, getUserController, postUserController, updateUserController, } from '../controllers/usersController.js'
const router = express.Router()
router.get('/', getAllUsersController)
router.get('/:id', getUserController)
router.post('/', postUserController)
router.patch('/:id', updateUserController)
router.delete('/:id', deleteUserController)
export default router