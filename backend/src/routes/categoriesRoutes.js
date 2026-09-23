import express from 'express'
import { createCategoryController, deleteCategoryController, getCategoriesController, getCategoryController, updateCategoryController } from '../controllers/categoriesController.js'
const router = express.Router()
router.get('/', getCategoriesController)
router.get('/:id', getCategoryController)
router.post('/', createCategoryController)
router.patch('/:id', updateCategoryController)
router.delete('/:id', deleteCategoryController)
export default router