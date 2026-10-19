'use client'
import React, { useEffect, useState } from 'react'
import { getProductVariants } from '@/api/product'
import { addToCart, getCarts } from '@/api/carts'
import { useDispatch } from 'react-redux'
import { setCart } from '@/store/cartSlice'
import { Button } from '../ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'

const ProductVariant = ({ product }) => {
    const [variants, setVariants] = useState([])
    const [selectedVariant, setSelectedVariant] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [cartError, setCartError] = useState('')
    const totalPrice = selectedVariant ? selectedVariant.price * quantity : 0
    const dispatch = useDispatch()
    useEffect(() => {
        const getVariants = async () => {
            const res = await getProductVariants()
            setVariants(res)
        }
        getVariants()
    }, [])
    const handleAddToCart = async () => {
        if (!selectedVariant) return
        setCartError('')
        try {
            const result = await addToCart(
                selectedVariant.id,
                quantity
            )
            const cart = await getCarts()
            dispatch(setCart(cart))
            console.log(result);
        } catch (error) {
            if (error.response?.data?.message == 'Not enough stock') {
                setCartError('در انبار موجود نیست!')
            }
            else {
                setCartError('مشکلی در افزودن محصول به سبد خرید رخ داد!')
            }
        }
    }
    const buttonsStyle = 'rounded-full px-2 text-white font-bold text-2xl'
    if (!product) return null
    const variantData = variants.filter(variant => variant.product_id === product.id)
    return (
        <div>
            <div className='flex flex-col gap-5'>
                <Select value={selectedVariant?.id ? String(selectedVariant.id) : ''} onValueChange={(value) => {
                    const variant = variantData.find(variant => variant.id === Number(value))
                    setSelectedVariant(variant)
                    setQuantity(1)
                }} className='bg-mauve-500 rounded-2xl py-1 px-2 text-white '>
                    <SelectTrigger>
                        <SelectValue placeholder="انتخاب رنگ" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>انتخاب رنگ </SelectLabel>
                            {variantData.map(variant => (
                                <SelectItem key={variant.id} value={String(variant.id)}>
                                    {variant.color}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {selectedVariant && (
                    <>
                        <div className='fa-num flex items-center gap-10'>
                            <span>تعداد:</span>
                            <div className='flex justify-evenly w-full'>
                                <button className={`bg-red-500 ${buttonsStyle}`} onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>-</button>
                                <span className='text-2xl'>{quantity}</span>
                                <button
                                    disabled={quantity >= selectedVariant.stock}
                                    onClick={() => {
                                        if (quantity < selectedVariant.stock) {
                                            setQuantity(prev => prev + 1)
                                        }
                                    }} className={`bg-green-500 ${buttonsStyle} disabled:opacity-40 disabled:cursor-not-allowed`}>+</button>
                                {quantity >= selectedVariant.stock && (
                                    <span className=' text-sm'>حداکثر تعداد سفارش این محصول <span className='text-lg text-red-500 font-bold'>{selectedVariant.stock}</span> عدد میباشد</span>
                                )}
                            </div>
                        </div>
                        <span>قیمت هر واحد: {selectedVariant.price.toLocaleString('fa-IR')}</span>
                        < span > قیمت کل :  <span className='text-mauve-700 text-xl font-bold fa-num'>{totalPrice.toLocaleString('fa-IR')}</span> تومان </ span>

                        <span>تعداد در انبار : <span className='text-mauve-700 text-xl font-bold fa-num'>{selectedVariant.stock}</span> عدد </span>

                    </>
                )}
                <div className='flex justify-center'>
                    <Button onClick={handleAddToCart} className='bg-mauve-500 hover:cursor-pointer text-white rounded-lg py-1 px-2'>افزودن به سبد خرید</Button>
                </div>
                {cartError && (
                    <span className='text-red-500 text-sm'>{cartError}</span>
                )}
            </div>
        </div >
    )
}

export default ProductVariant

