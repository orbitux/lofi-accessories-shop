import { getCarts } from '@/api/carts'
import { useAuth } from '@/context/AuthContext'
import { setCart } from '@/store/cartSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const CartInitializer = () => {
    const dispatch = useDispatch()
    const { user, loading } = useAuth()

    useEffect(() => {
        if (loading || !user) return
        const loadCart = async () => {
            try {
                const cart = await getCarts()
                dispatch(setCart(cart))
            } catch (error) {
                console.error('Failed to load cart:', error)
            }
        }
        loadCart()
    }, [dispatch, loading, user])
    return null
}

export default CartInitializer