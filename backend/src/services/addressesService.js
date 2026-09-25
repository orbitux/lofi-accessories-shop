import { pool } from "../../config/database.js"

export const getAllAddressesService = async () => {
    const result = await pool.query(
        "SELECT * FROM addresses"
    )
    return result.rows
}
export const getAddressesService = async (id) => {
    const result = await pool.query(
        "SELECT * FROM addresses WHERE id = $1", [id]
    )
    return result.rows[0]
}
export const postAddressServie = async (user_id, title, recipient_name, phone, province, city, address, postal_code) => {
    const result = await pool.query(
        "INSERT INTO addresses (user_id, title, recipient_name, phone, province, city, address, postal_code) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING * "
        , [user_id, title, recipient_name, phone, province, city, address, postal_code]
    )
    return result.rows[0]
}

export const updateAddressService = async (user_id, title, recipient_name, phone, province, city, address, postal_code, id) => {
    const result = await pool.query(
        "UPDATE addresses SET user_id = $1, title = $2, recipient_name = $3, phone = $4, province = $5, city = $6, address = $7, postal_code = $8 WHERE id = $9 RETURNING *",
        [user_id, title, recipient_name, phone, province, city, address, postal_code, id]
    )
    return result.rows[0]
}
export const deleteAddressService = async (id) => {
    const result = await pool.query(
        "DELETE FROM addresses WHERE id = $1 RETURNING *", [id]
    )
    return result.rows[0]
}