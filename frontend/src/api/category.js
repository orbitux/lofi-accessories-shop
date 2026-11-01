import { apiUrl } from "./api"

export const getCategories = async () => {
    const response = await apiUrl.get('/categories')
    return response.data
}
export const getCategoriesBySlug = async (slug) => {
    const response = await apiUrl.get(`/categories/slug/${slug}`)
    return response.data
}