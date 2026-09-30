import { addToCartService, deleteCartItemService, getCartsService, updateCartItemService } from "../services/cartsService.js"

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
export const updateCartItemController = async (req, res) => {
    try {
        const { id } = req.params
        const { quantity } = req.body
        if (!Number.isInteger(quantity) || quantity <= 0) {
            return res.status(400).json({
                message: "Quantity must be a positive integer"
            });
        }
        const updatedItem = await updateCartItemService(1, id, quantity)
        res.status(200).json(updatedItem)
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: error.message
        });
    }
}
export const deleteCartItemController = async (req, res) => {
    try {
        const { id } = req.params
        const deleteItem = await deleteCartItemService(1, id)
        res.status(200).json(deleteItem)
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: error.message
        });
    }
}