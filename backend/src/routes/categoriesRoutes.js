import express from 'express'
import { createCategoryController, deleteCategoryController, getCategoriesController, getCategoryBySlugController, getCategoryController, updateCategoryController } from '../controllers/categoriesController.js'
const router = express.Router()
router.get('/', getCategoriesController)
router.get('/:id', getCategoryController)
router.get('/slug/:slug', getCategoryBySlugController)
router.post('/', createCategoryController)
router.patch('/:id', updateCategoryController)
router.delete('/:id', deleteCategoryController)
export default router