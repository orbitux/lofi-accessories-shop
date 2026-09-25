import { deleteAddressService, getAddressesService, getAllAddressesService, postAddressServie, updateAddressService } from "../services/addressesService.js"

export const getAllAddressesController = async (req, res) => {
    try {
        const result = await getAllAddressesService()
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(404).json({
            message: "failed to fetch data"
        })
    }
}

export const getAddressesController = async (req, res) => {
    try {
        const { id } = req.params
        const result = await getAddressesService(id)
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(404).json({
            message: "failed to fetch data"
        })
    }
}
export const postAddressController = async (req, res) => {
    try {
        const { user_id, title, recipient_name, phone, province, city, address, postal_code } = req.body
        const result = await postAddressServie(user_id, title, recipient_name, phone, province, city, address, postal_code)
        res.status(201).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "failed to post data"
        })
    }
}
export const updateAddressController = async (req, res) => {
    try {
        const { id } = req.params
        const { user_id, title, recipient_name, phone, province, city, address, postal_code } = req.body
        const result = await updateAddressService(user_id, title, recipient_name, phone, province, city, address, postal_code, id)
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "failed to update data"
        })
    }
}
export const deleteAddressController = async (req, res) => {
    try {
        const { id } = req.params
        const result = await deleteAddressService(id)
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "failed to delete data"
        })
    }

}