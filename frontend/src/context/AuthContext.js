/* eslint-disable react-hooks/set-state-in-effect */
import { apiUrl } from "@/api/api"
import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const checkAuth = async () => {
        try {
            const response = await apiUrl.get('/auth/me')
            setUser(response.data.user)
        } catch (error) {
            if (error.response?.status === 401) {
                setUser(null)
            } else {
                console.error('Auth check failed:', error)
            }
        } finally {
            setLoading(false)
        }
    }
    const login = async (email, password) => {
        try {
            setError(null)
            const response = await apiUrl.post('/auth/login', {
                email,
                password
            })
            setUser(response.data.user)
            return {
                success: true,
                user: response.data.user
            }
        } catch (error) {
            const message = error.response?.data?.message || "Login failed"
            setError(message)
            return {
                success: false,
                message
            }
        }
    }
    const register = async (name, email, password) => {
        try {
            setError(null)
            const response = await apiUrl.post('/auth/register', {
                name,
                email,
                password
            })
            return {
                success: true,
                user: response.data.user
            }
        } catch (error) {
            const message = error.response?.data?.message || "Registration failed."
            setError(error)
            return {
                success: false,
                message
            }
        }
    }
    const logout = async () => {
        try {
            setError(null)
            await apiUrl.post('/auth/logout')
            setUser(null)
        } catch (error) {
            console.log('REGISTER ERROR:', error.response?.data)

            const message =
                error.response?.data?.message ||
                'Registration failed.'
            setError(message)
        }
    }
    useEffect(() => {
        checkAuth()
    }, [])
    return (
        <AuthContext.Provider value={{ user, loading, error, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    return useContext(AuthContext)
}

export { useAuth, AuthProvider }