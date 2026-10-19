import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import { getCurrentUserService, loginUserService, registerUserService } from "../services/authService.js"
export const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (
            typeof name !== "string" || typeof email !== "string" || typeof password !== "string"
        ) {
            return res.status(400).json({
                messgae: "Name, email and password are required."
            })
        }
        if (
            !name.trim() || !email.trim() || password.length < 8
        ) {
            return res.status(400).json({
                message: 'Name and email are required, and password must be at least 8 characters.'
            })
        }
        const user = await registerUserService({ name, email, password })
        return res.status(201).json({
            message: 'Registration successful.',
            user
        })
    } catch (error) {
        // PostgreSQL unique violation: duplicate email
        if (error.code === '23505') {
            return res.status(409).json({
                message: 'An account with this email already exists.'
            })
        }
        console.error('Registration error', error);
        return res.status(500).json({
            message: 'An unexpected error occurred.'
        })
    }
}
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        if (
            typeof email !== "string" || typeof password !== "string" || !email.trim() || !password
        ) {
            return res.status(400).json({
                message: "Email and password are required."
            })
        }
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not configured')
        }
        const user = await loginUserService(email)
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password."
            })
        }
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        )
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid email or password."
            })
        }
        const token = jwt.sign(
            { sub: String(user.id) },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )
        res.cookie('lofi_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(200).json({
            message: "Login successful.",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })
    } catch (error) {
        console.error('Login error:', error)
        return res.status(500).json({
            message: 'An unexpected error occurred.'
        })
    }
}
export const logoutController = async (req, res) => {
    res.clearCookie('lofi_token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/'
    })
    return res.status(200).json({
        message: "Logout successful."
    })
}

export const meController = async (req, res) => {
    try {
        const user = await getCurrentUserService(req.user.id)
        if (!user) {
            return res.status(404).json({
                message: 'User not found.'
            })
        }
        return res.status(200).json({
            user
        })
    } catch (error) {
        console.error('Get current user error:', error)
        return res.status(500).json({
            message: 'An unexpected error occurred.'
        })
    }
}