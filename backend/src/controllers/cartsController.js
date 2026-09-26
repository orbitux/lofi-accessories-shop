import { addToCartService, getCartsService } from "../services/cartsService.js"

export const getCartsController = async (req, res) => {
    try {
        const cart = await getCartsService(1)
        res.status(200).json(cart)
    } catch (error) {
        console.error(error)
        res.status(404).json({
            message: "failed to fetch data"
        })
    }
}

export const addToCartController = async (req, res) => {
    try {
        const { product_variant_id, quantity } = req.body
        const cartItem = await addToCartService(1, product_variant_id, quantity)
        res.status(201).json(cartItem)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}