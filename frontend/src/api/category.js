import { apiUrl } from "./api"

export const getCategories = async () => {
    const response = await apiUrl.get('/categories')
    return response.data
}