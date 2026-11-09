import { pool } from "../../config/database.js"

export const getAllProducts = async (search = '', page = 1, limit = 2) => {
    const offset = (page - 1) * limit
    const result = await pool.query(
        'SELECT * FROM products WHERE name ILIKE $1 ORDER BY id DESC LIMIT $2 OFFSET $3', [`%${search}%`, limit, offset]
    )
    const countResult = await pool.query(
        `
            SELECT COUNT(*)
            FROM products
            WHERE name ILIKE $1
        `, [`%${search}%`]
    )
    const totalProducts = Number(countResult.rows[0].count)
    return {
        products: result.rows,
        pagination: {
            page,
            limit,
            totalProducts,
            totalPages: Math.ceil(totalProducts / limit)
        }
    }
}
export const getProducts = async (id) => {
    const result = await pool.query(
        "SELECT * FROM products WHERE id = $1", [id]
    )
    return result.rows[0]
}
export const getProductBySlug = async (slug) => {
    const result = await pool.query(
        `SELECT 
            p.*,
            c.slug AS category_slug
         FROM products p
         JOIN categories c
            ON c.id = p.category_id
         WHERE p.slug = $1`,
        [slug]
    )
    return result.rows[0]
}
export const getProductVariantsByProduct = async (productId) => {
    const result = await pool.query(
        `SELECT * FROM product_variants
        WHERE product_id = $1 ORDER BY id ASC`, [productId]
    )
    return result.rows
}
export const getProductsByCaregory = async (slug) => {
    const result = await pool.query(
        `
            SELECT p.*
            FROM products p
            JOIN categories c ON c.id = p.category_id
            WHERE c.slug = $1
            ORDER BY p.id DESC
        `, [slug]
    )
    return result.rows
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