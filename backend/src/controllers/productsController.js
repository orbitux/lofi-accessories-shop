import { deleteProduct, getAllProducts, getProducts, postProduct, updateProduct } from "../services/productsService.js"

export const getAllProductsController = async (req, res) => {
    try {
        const result = await getAllProducts()
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(404).json({
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