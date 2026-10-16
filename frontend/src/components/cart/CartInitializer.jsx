import { getCarts } from '@/api/carts'
import { setCart } from '@/store/cartSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const CartInitializer = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const loadCart = async () => {
            const cart = await getCarts()
            dispatch(setCart(cart))
        }
        loadCart()
    }, [dispatch])
    return null
}

export default CartInitializer