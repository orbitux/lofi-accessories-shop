import { pool } from "../../config/database.js"

export const getCartsService = async (userId) => {
    const result = await pool.query(
        `
            SELECT
            ci.id,
            p.name AS product_name,
            pv.color,
            pv.price,
            ci.quantity,
            pv.price * ci.quantity AS subtotal
            FROM carts c
            JOIN cart_items ci
            ON ci.cart_id = ci.id
            JOIN product_variants pv
            ON pv.id = ci.product_variant_id
            JOIN products p
            ON p.id = pv.product_id
            WHERE c.user_id = $1
        `, [userId]
    )
    return result.rows
}




export const addToCartService = async (userId, productVariantId, quantity) => {
    const variantResult = await pool.query(
        `
            SELECT
            id,
            product_id,
            color,
            price,
            stock
            FROM
            product_variants WHERE id = $1
        `, [productVariantId]
    )
    if (variantResult.rows.length === 0) {
        throw new Error("Product variant not found")
    }
    const variant = variantResult.rows[0]
    console.log(variant)
    if (quantity > variant.stock) {
        throw new Error("Not enough stock")
    }
    const cartResult = await pool.query(
        `
            SELECT id 
            FROM carts
            WHERE user_id = $1
        `, [userId]
    )
    if (cartResult.rows.length === 0) {
        throw new Error("Cart not found")
    }
    const cart = cartResult.rows[0]
    console.log(cart)

    const cartItemResult = await pool.query(
        `SELECT id,quantity FROM cart_items WHERE cart_id = $1 AND product_variant_id = $2`,
        [cart.id, productVariantId]
    )
    const cartItem = cartItemResult.rows[0]
    if (cartItem) {
        const newQuantity = cartItem.quantity + quantity
        if (newQuantity > variant.stock) {
            throw new Error('Not enough stock')
        }
        const updateResult = await pool.query(
            `
                UPDATE cart_items
                SET quantity = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING * 
            `, [newQuantity, cartItem.id]
        )
        console.log("New quantity:", newQuantity);
        return updateResult.rows[0]
    }
    const insertResult = await pool.query(
        `
        INSERT INTO cart_items (cart_id,product_variant_id,quantity) VALUES ($1,$2,$3) RETURNING *
        `, [cart.id, productVariantId, quantity]
    )
    return insertResult.rows[0]
}