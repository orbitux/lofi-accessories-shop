'use client'
import React, { useEffect, useState } from 'react'
import CartSummary from '../cart/CartSummary'
import CartItem from '../cart/CartItem'
import { getProductImages } from '@/api/product'
import { getCarts } from '@/api/carts'
import PaymentMethod from './PaymentMethod'

const OrderSummary = () => {
    const [items, setItems] = useState([])
    const [images, setImages] = useState([])
    useEffect(() => {
        const getProductsCheckout = async () => {
            const [itemRes, imageRes] = await Promise.all([
                getCarts(),
                getProductImages()
            ])
            setItems(itemRes)
            setImages(imageRes)
        }
        getProductsCheckout()
    }, [])
    return (
        <div className='container mx-auto mb-10 grid grid-cols-2 gap-5 mt-10'>
            <div className='flex flex-col gap-3'>
                <span>خلاصه سفارش</span>
                {items.map(item => {
                    const imageData = images.find(image => image.product_id === item.product_id)
                    return (
                        <div key={item.id} className='flex flex-col items-center border border-mauve-400 rounded'>
                            <div className='flex items-center'>
                                <img src={imageData?.image_url} alt={imageData.alt_text || item.product_name} className='w-20 h-20 object-contain rounded' />
                                <span>نام محصول : {item.product_name}</span>
                            </div>
                            <span>رنگ محصول : {item.color}</span>
                            <span>قیمت محصول : {item.price.toLocaleString('fa-IR')}</span>
                            <span className='fa-num'>تعداد : {item.quantity}</span>
                        </div>
                    )
                })}

            </div>
            <PaymentMethod items={items} />
        </div>
    )
}

export default OrderSummary