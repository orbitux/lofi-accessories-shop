import { apiUrl } from "./api"

export const getProducts = async ({ search = '', page = 1, limit = 8, sort = 'newest', categoryId = null }) => {

    const response = await apiUrl.get('/products', {
        params: {
            search,
            page,
            limit,
            sort,
            categoryId
        }
    })
    return response.data
}
export const getProductBySlug = async (slug) => {
    const response = await apiUrl.get(`/products/slug/${slug}`)
    return response.data
}
export const getProductVariantsByProduct = async (productId) => {
    const response = await apiUrl.get(`/products/${productId}/variants`)
    return response.data
}
export const getProductsByCategory = async (slug) => {
    const response = await apiUrl.get(`/products/category/${slug}`)
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