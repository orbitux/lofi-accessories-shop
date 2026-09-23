import express from 'express'
import { deleteProductController, getAllProductsController, getProductsController, postProductController, updateProductController } from '../controllers/productsController.js'

const router = express.Router()
router.get('/', getAllProductsController)
router.get('/:id', getProductsController)
router.post('/', postProductController)
router.patch('/:id', updateProductController)
router.delete('/:id', deleteProductController)
export default router