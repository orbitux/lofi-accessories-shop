import { deletePimageService, getPImageService, getPImagesService, postPimageService, updatePimageService } from "../services/pImagesService.js"

export const getPImagesControllers = async (req, res) => {
    try {
        const result = await getPImagesService()
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(404).json({
            message: "failed to fetch data"
        })
    }
}
export const getPImageController = async (req, res) => {
    try {
        const { id } = req.params
        const result = await getPImageService(id)
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(404).json({
            message: "failed to fetch data"
        })
    }
}
export const postPimageController = async (req, res) => {
    try {
        const { product_id, image_url, alt_text, sort_order } = req.body
        const result = await postPimageService(product_id, image_url, alt_text, sort_order)
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "failed to post data"
        })
    }
}
export const updatePimageController = async (req, res) => {
    try {
        const { id } = req.params
        const { product_id, image_url, alt_text, sort_order } = req.body
        const result = await updatePimageService(product_id, image_url, alt_text, sort_order, id)
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "failed to update data"
        })
    }
}
export const deletePimageController = async (req, res) => {
    try {
        const { id } = req.params
        const result = await deletePimageService(id)
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "failed to delete data"
        })
    }
}