import { apiUrl } from "./api"

export const getProducts = async () => {
    const response = await apiUrl.get('/products')
    return response.data
}
export const getProductImages = async () => {
    const response = await apiUrl.get('/product-images')
    return response.data
}
export const getProductVariants = async () => {
    const response = await apiUrl.get('/product-variants')
    return response.data
}