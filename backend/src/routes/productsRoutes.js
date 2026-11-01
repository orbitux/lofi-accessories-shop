import express from 'express'
import { deleteProductController, getAllProductsController, getProductBySlugController, getProductsByCategoryController, getProductsController, getProductVariantsByProductController, postProductController, updateProductController } from '../controllers/productsController.js'

const router = express.Router()
router.get('/', getAllProductsController)
router.get('/slug/:slug', getProductBySlugController)
router.get('/category/:slug', getProductsByCategoryController)
router.get('/:productId/variants', getProductVariantsByProductController)
router.get('/:id', getProductsController)
router.post('/', postProductController)
router.patch('/:id', updateProductController)
router.delete('/:id', deleteProductController)
export default router