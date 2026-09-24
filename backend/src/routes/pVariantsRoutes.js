import express from 'express'
import { deletePVariantsController, getAllProductVariantsController, getProductsVariantsController, postPVariantsController, updatePVariantsController } from '../controllers/pVariantsController.js'
const router = express.Router()
router.get('/', getAllProductVariantsController)
router.get('/:id', getProductsVariantsController)
router.post('/', postPVariantsController)
router.patch('/:id',updatePVariantsController)
router.delete('/:id',deletePVariantsController)
export default router