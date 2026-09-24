import { pool } from "../../config/database.js"

export const getPImagesService = async () => {
    const result = await pool.query(
        "SELECT * FROM product_images"
    )
    return result.rows
}
export const getPImageService = async (id) => {
    const result = await pool.query(
        "SELECT * FROM product_images WHERE id = $1",
        [id]
    )
    return result.rows[0]
}
export const postPimageService = async (product_id, image_url, alt_text, sort_order) => {
    const result = await pool.query(
        "INSERT INTO product_images (product_id,image_url,alt_text,sort_order) VALUES ($1,$2,$3,$4) RETURNING *",
        [product_id, image_url, alt_text, sort_order]
    )
    return result.rows[0]
}
export const updatePimageService = async (product_id, image_url, alt_text, sort_order, id) => {
    const result = await pool.query(
        "UPDATE product_images SET product_id = $1, image_url = $2, alt_text = $3, sort_order = $4 WHERE id = $5 RETURNING *",
        [product_id, image_url, alt_text, sort_order, id]
    )
    return result.rows[0]
}
export const deletePimageService = async (id) => {
    const result = await pool.query(
        "DELETE FROM product_images WHERE id = $1 RETURNING *",
        [id]
    )
    return result.rows[0]
}