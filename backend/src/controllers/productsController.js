import { deleteProduct, getAllProducts, getProductBySlug, getProducts, getProductsByCaregory, getProductVariantsByProduct, postProduct, updateProduct } from "../services/productsService.js"

export const getAllProductsController = async (req, res) => {
    try {
        const { search = '', page = 1, limit = 8, sort = 'newest', categoryId } = req.query
        const pageNumber = Number(page)
        const limitNumber = Number(limit)
        const allowedSorts = ['newest', 'cheapest', 'expensive']
        const parsedCategoryId = categoryId === undefined ? null : Number(categoryId)
        if (
            categoryId !== undefined &&
            (!Number.isInteger(parsedCategoryId) || parsedCategoryId <= 0)
        ) {
            return res.status(400).json({
                message: 'Invalid categoryId parameter'
            })
        }
        if (!allowedSorts.includes(sort)) {
            return res.status(400).json({
                message: 'Invalid sort parameter'
            })
        }
        if (!Number.isInteger(pageNumber) || pageNumber < 1 || !Number.isInteger(limitNumber) || limitNumber < 1 || limitNumber > 50) {
            return res.status(400).json({
                message: 'Invalid pagination parameters'
            })
        }
        const result = await getAllProducts(search, pageNumber, limitNumber, sort, parsedCategoryId)
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "failed to fetch data"
        })
    }
}
export const getProductsController = async (req, res) => {
    try {
        const { id } = req.params
        const result = await getProducts(id)
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(404).json({
            message: "failde to fetch data"
        })
    }
}
export const getProductBySlugController = async (req, res) => {
    try {
        const { slug } = req.params
        const result = await getProductBySlug(slug)
        if (!result) {
            return res.status(404).json({
                message: 'Product not found'
            })
        }
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "failde to fetch data"
        })
    }
}
export const getProductVariantsByProductController = async (req, res) => {
    try {
        const { productId } = req.params
        const variants = await getProductVariantsByProduct(productId)
        res.status(200).json(variants)
    } catch (error) {
        console.error(error)

        res.status(500).json({
            message: 'Failed to fetch product variants'
        })
    }
}
export const getProductsByCategoryController = async (req, res) => {
    try {
        const { slug } = req.params
        const result = await getProductsByCaregory(slug)
        res.status(200).json(result)
    } catch (error) {
        console.error(error)

        res.status(500).json({
            message: 'Failed to fetch products by category'
        })
    }
}
export const postProductController = async (req, res) => {
    try {
        const { name, slug, description, category_id } = req.body
        const result = await postProduct(name, slug, description, category_id)
        res.status(201).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "failde to post data"
        })
    }
}
export const updateProductController = async (req, res) => {
    try {
        const { id } = req.params
        const { name, slug, description, category_id } = req.body
        const result = await updateProduct(name, slug, description, category_id, id)
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "failde to update data"
        })
    }
}
export const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params
        const result = await deleteProduct(id)
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "failde to delete data"
        })
    }
}