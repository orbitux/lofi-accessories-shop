import { pool } from "../../config/database.js"

export const getAllProducts = async () => {
    const result = await pool.query(
        "SELECT * FROM products"
    )
    return result.rows
}
export const getProducts = async (id) => {
    const result = await pool.query(
        "SELECT * FROM products WHERE id = $1", [id]
    )
    return result.rows[0]
}
export const postProduct = async (name, slug, description, category_id) => {
    const result = await pool.query(
        "INSERT INTO products (name,slug,description,category_id) VALUES ($1,$2,$3,$4) RETURNING *",
        [name, slug, description, category_id]
    )
    return result.rows[0]
}
export const updateProduct = async (name, slug, description, category_id, id) => {
    const result = await pool.query(
        "UPDATE products SET name = $1,slug = $2,description = $3,category_id = $4 WHERE id = $5 RETURNING *",
        [name, slug, description, category_id, id]
    )
    return result.rows[0]
}
export const deleteProduct = async (id) => {
    const result = await pool.query(
        "DELETE FROM products WHERE id = $1 RETURNING *",
        [id]
    )
    return result.rows[0]
}