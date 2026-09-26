import express from 'express'
import { addToCartController, getCartsController } from '../controllers/cartsController.js'
const router = express.Router()
router.get('/', getCartsController)
router.post('/items', addToCartController)
export default router