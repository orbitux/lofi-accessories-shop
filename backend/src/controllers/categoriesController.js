import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "../services/categoriesService.js"

export const getCategoriesController = async (req, res) => {
    try {
        const categories = await getCategories()
        res.json(categories)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "Failed to fetch categories"
        })
    }
}
export const getCategoryController = async (req, res) => {
    try {
        const { id } = req.params
        const category = await getCategory(id)
        res.json(category)
    } catch (error) {
        console.error(error)
        res.status(404).json({
            message: "Failed to fetch category"
        })
    }
}
export const createCategoryController = async (req, res) => {
    try {
        const { name, slug } = req.body
        const category = await createCategory(name, slug)
        res.status(201).json(category)

    } catch (error) {
        console.error(error)

        res.status(500).json({
            message: "Failed to create category"
        })
    }
}
export const updateCategoryController = async (req, res) => {
    try {
        const { id } = req.params
        const { name, slug } = req.body
        const category = await updateCategory(name, slug, id)
        res.status(200).json(category)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to update category"
        })
    }
}
export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params
        const category = await deleteCategory(id)
        res.status(200).json(category)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "Failed to delete category"
        })
    }
}