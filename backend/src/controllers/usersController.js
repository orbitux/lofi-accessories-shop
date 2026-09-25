import { deleteUserService, getAllUsersService, getUserService, postUserService, updateUserService } from "../services/usersService.js"

export const getAllUsersController = async (req, res) => {
    try {
        const result = await getAllUsersService()
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(404).json({
            message: "failed to fetch data"
        })
    }
}
export const getUserController = async (req, res) => {
    try {
        const { id } = req.params
        const result = await getUserService(id)
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(404).json({
            message: "failed to fetch data"
        })
    }
}
export const postUserController = async (req, res) => {
    try {
        const { name, email, password, role } = req.body
        const result = await postUserService(name, email, password, role)
        res.status(201).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "failed to post data"
        })
    }
}
export const updateUserController = async (req, res) => {
    try {
        const { id } = req.params
        const { name, email, password, role } = req.body
        const result = await updateUserService(name, email, password, role, id)
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "failed to update data"
        })
    }
}
export const deleteUserController = async (req, res) => {
    try {
        const { id } = req.params
        const result = deleteUserService(id)
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "failed to delete data"
        })
    }
}