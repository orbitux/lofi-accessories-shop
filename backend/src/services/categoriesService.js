import { pool } from "../../config/database.js"

export const getCategories = async () => {
    const result = await pool.query(
        "SELECT * FROM categories"
    )
    return result.rows
}
export const getCategory = async (id) => {
    const result = await pool.query(
        "SELECT * FROM categories WHERE id = $1",
        [id]
    )
    return result.rows[0]
}
export const createCategory = async (name, slug) => {
    const result = await pool.query(
        "INSERT INTO categories (name,slug) VALUES ($1,$2) RETURNING *",
        [name, slug]
    )
    return result.rows[0]
}
export const updateCategory = async (name, slug, image_url, alt_text, id) => {
    const result = await pool.query(
        "UPDATE categories SET name = $1, slug = $2,image_url=$3,alt_text=$4 WHERE id = $5 RETURNING *",
        [name, slug,image_url,alt_text, id]
    )
    return result.rows[0]
}
export const deleteCategory = async (id) => {
    const result = await pool.query(
        "DELETE FROM categories WHERE id = $1 RETURNING *",
        [id]
    )
    return result.rows[0]
}