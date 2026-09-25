import { pool } from "../../config/database.js"

export const getAllUsersService = async () => {
    const result = await pool.query(
        "SELECT * FROM users"
    )
    return result.rows
}
export const getUserService = async (id) => {
    const result = await pool.query(
        "SELECT * FROM users WHERE id = $1", [id]
    )
    return result.rows[0]
}
export const postUserService = async (name, email, password, role) => {
    const result = await pool.query(
        "INSERT INTO users (name, email, password, role) VALUES($1,$2,$3,$4) RETURNING *"
        , [name, email, password, role]
    )
    return result.rows[0]
}
export const updateUserService = async (name, email, password, role, id) => {
    const result = await pool.query(
        "UPDATE users SET name = $1, email = $2, password = $3, role = $4 WHERE id = $5 RETURNING *",
        [name, email, password, role, id]
    )
    return result.rows[0]
}
export const deleteUserService = async (id) => {
    const result = await pool.query(
        "DELETE FROM users WHERE id = $1 RETURNING *",
        [id]
    )
    return result.rows[0]
}