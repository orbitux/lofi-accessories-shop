import bcrypt from 'bcryptjs'
import { pool } from '../../config/database.js'
export const registerUserService = async ({
    name, email, password
}) => {

    const normilizeEmail = email.trim().toLowerCase()
    const hashedPassword = await bcrypt.hash(password, 12)
    const result = await pool.query(
        `INSERT INTO users(name,email,password,role) VALUES ($1,$2,$3,$4) RETURNING id,name,email,role,created_at`,
        [name.trim(), normilizeEmail, hashedPassword, 'customer']
    )
    result.rows[0]
}
export const loginUserService = async (email) => {
    const normilizeEmail = email.trim().toLowerCase()
    const result = await pool.query(
        `SELECT id,name,email,password,role FROM users WHERE email = $1`,
        [normilizeEmail]
    )
    return result.rows[0] ?? null
}
export const getCurrentUserService = async (id) => {
    const result = await pool.query(
        `SELECT id,name,email,role,created_at FROM users WHERE id = $1`, [id]
    )
    return result.rows[0] ?? null
}