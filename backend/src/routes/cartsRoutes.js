import express from 'express'
import { addToCartController, deleteCartItemController, getCartsController, updateCartItemController } from '../controllers/cartsController.js'
const router = express.Router()
router.get('/', getCartsController)
router.post('/items', addToCartController)
router.patch('/items/:id', updateCartItemController)
router.delete('/items/:id',deleteCartItemController)
export default router