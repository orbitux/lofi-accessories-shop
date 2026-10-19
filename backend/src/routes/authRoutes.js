import express from 'express'
import { loginController, logoutController, meController, registerController } from '../controllers/authController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'
const router = express.Router()
router.post('/register', registerController)
router.post('/login', loginController)
router.post('/logout', logoutController)
router.get('/me', authMiddleware, meController)
export default router