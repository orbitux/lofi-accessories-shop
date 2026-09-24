import { pool } from "../../config/database.js"

export const getAllPVariants = async () => {
    const result = await pool.query(
        "SELECT * FROM product_variants"
    )
    return result.rows
}
export const getPVariants = async (id) => {
    const result = await pool.query(
        "SELECT * FROM product_variants WHERE id = $1",
        [id]
    )
    return result.rows[0]
}
export const postPVariants = async (product_id, color, price, stock) => {
    const result = await pool.query(
        "INSERT INTO product_variants (product_id,color,price,stock) VALUES ($1,$2,$3,$4) RETURNING *",
        [product_id, color, price, stock]
    )
    return result.rows[0]
}
export const updatePVariants = async (product_id, color, price, stock, id) => {
    const result = await pool.query(
        "UPDATE product_variants SET product_id = $1, color = $2, price = $3, stock = $4 WHERE id = $5 RETURNING *",
        [product_id, color, price, stock, id]
    )
    return result.rows[0]
}
export const deletePVariants = async (id) => {
    const result = await pool.query(
        "DELETE FROM product_variants WHERE id = $1 RETURNING * ",
        [id]
    )
    return result.rows[0]
}