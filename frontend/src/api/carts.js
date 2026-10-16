import { apiUrl } from "./api"

export const getCarts = async () => {
    const response = await apiUrl.get('/carts')
    return response.data
}

export const addToCart = async (productVariantId, quantity) => {
    const response = await apiUrl.post('/carts/items', {
        product_variant_id: productVariantId,
        quantity: quantity
    })
    return response.data
}
export const updateCart = async (cartItemId, quantity) => {
    const response = await apiUrl.patch(`/carts/items/${cartItemId}`, {
        quantity: quantity
    })
    return response.data
}
export const deleteCart = async (cartItemId) => {
    const responce = await apiUrl.delete(`/carts/items/${cartItemId}`)
    return responce.data
}