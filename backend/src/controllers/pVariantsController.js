import { deletePVariants, getAllPVariants, getPVariants, postPVariants, updatePVariants } from "../services/pVariantsService.js"

export const getAllProductVariantsController = async (req, res) => {
    try {
        const result = await getAllPVariants()
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(404).json({
            message: "failed to fetch data"
        })
    }
}
export const getProductsVariantsController = async (req, res) => {
    try {
        const { id } = req.params
        const result = await getPVariants(id)
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(404).json({
            message: "failed to fetch data"
        })
    }
}
export const postPVariantsController = async (req, res) => {
    try {
        const { product_id, color, price, stock } = req.body
        const result = await postPVariants(product_id, color, price, stock)
        res.status(201).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "failed to post data"
        })
    }
}
export const updatePVariantsController = async (req, res) => {
    try {
        const { id } = req.params
        const { product_id, color, price, stock } = req.body
        const result = await updatePVariants(product_id, color, price, stock, id)
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "failed to update data"
        })
    }
}
export const deletePVariantsController = async (req, res) => {
    try {
        const { id } = req.params
        const result = await deletePVariants(id)
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "failed to update data"
        })
    }
}