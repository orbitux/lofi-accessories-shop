'use client'
import React, { useEffect, useState } from 'react'
import { getProductVariantsByProduct } from '@/api/product'
import { addToCart, getCarts } from '@/api/carts'
import { useDispatch } from 'react-redux'
import { setCart } from '@/store/cartSlice'
import { Button } from '../ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { TbBasketCheck } from "react-icons/tb";
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Fa500Px } from 'react-icons/fa'

const ProductVariant = ({ product }) => {
    const [variants, setVariants] = useState([])
    const [selectedVariant, setSelectedVariant] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [cartError, setCartError] = useState('')
    const [isAddingToCart, setIsAddingToCart] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => {
        const getVariants = async () => {
            try {
                const res = await getProductVariantsByProduct(product.id)
                setVariants(res)
            } catch (error) {
                console.error('Failed to fetch product variants:', error)
            }
        }
        if (product?.id) {
            getVariants()
        }
    }, [product?.id])
    const totalPrice = selectedVariant ? selectedVariant.price * quantity : 0

    const handleAddToCart = async () => {
        if (!selectedVariant) {
            setCartError('لطفا رنگ محصول را انتخاب کنید')
            return
        }
        setCartError('')
        setIsAddingToCart(true)
        try {
            const result = await addToCart(
                selectedVariant.id,
                quantity
            )
            const cart = await getCarts()
            dispatch(setCart(cart))
            toast.success('محصول با موفقیت به سبد خرید اضافه شد', {
                action: {

                    label: 'برو به سبد خرید',
                    onClick: () => router.push('/cart')
                }, duration: 10000, actionButtonStyle: { backgroundColor: '#79697b' }, closeButton: true, icon: <TbBasketCheck size={24}/>
            })
        } catch (error) {
            if (error.response?.data?.message == 'Not enough stock') {
                setCartError('در انبار موجود نیست!')
            }
            else {
                setCartError('مشکلی در افزودن محصول به سبد خرید رخ داد!')
            }
        } finally {
            setTimeout(() => {
                setIsAddingToCart(false)
            }, 2000)
        }
    }
    if (!product) return null
    return (
        <div className='flex flex-col gap-6 mt-5'>
            {/* Color */}
            <div className='flex flex-col gap-2'>
                <label className='text-sm font-bold text-mauve-800'>رنگ محصول</label>
                <Select value={selectedVariant?.id ? String(selectedVariant.id) : ''} onValueChange={(value) => {
                    const variant = variants.find(variant => variant.id === Number(value))
                    setSelectedVariant(variant)
                    setQuantity(1)
                }} className='bg-mauve-500 rounded-2xl py-1 px-2 text-white '>
                    <SelectTrigger className='w-fullI'>
                        <SelectValue placeholder="انتخاب رنگ" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>انتخاب رنگ </SelectLabel>
                            {variants.map(variant => (
                                <SelectItem key={variant.id} value={String(variant.id)}>
                                    {variant.color}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {/* Selected variant info */}
                {selectedVariant && (
                    <>
                        {/* price */}
                        <div className='flex items-center justify-between'>
                            <span className='text-sm text-mauve-600'>قیمت هر واحد </span>
                        </div>
                        <span className='fa-num font-bold text-lg text-mauve-800'>
                            {Number(selectedVariant.price).toLocaleString('fa-IR')}
                            <span className='text-sm font-normal ms-1'>تومان</span>
                        </span>
                        {/* stock */}
                        <div className='flex items-center justify-between'>
                            <span className='text-sm text-mauve-600'>
                                موجودی
                            </span>
                            <span className='fa-num text-sm font-bold text-mauve-700'>{selectedVariant.stock}</span>
                        </div>
                        <div className='h-px bg-mauve-200' />

                        {/* quantity */}
                        <div className='flex items-center justify-between'>
                            <span className='font-bold text-mauve-800'>تعداد</span>
                            <div className='flex items-center gap-4'>
                                <button type='button' onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                    className='w-9 h-9 rounded-full bg-mauve-200 text-mauve-900 text-xl hover:bg-mauve-300 transition'
                                >
                                    -
                                </button>
                                <span className='fa-num text-lg font-bold min-w-6 text-center'>{quantity}</span>
                                <button type='button' disabled={quantity >= selectedVariant.stock}
                                    onClick={() => {
                                        if (quantity < selectedVariant.stock) {
                                            setQuantity(prev => prev + 1)
                                        }
                                    }}
                                    className='w-9 h-9 rounded-full bg-mauve-200 text-mauve-900 text-xl hover:bg-mauve-300 transition disabled:opacity-40 disabled:cursor-not-allowed'
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        {quantity >= selectedVariant.stock && (
                            <p className='text-xs text-red-500 text-center'>حداکثر تعداد قابل سفارش:{' '}
                                <span className='fa-num font-bold'>{selectedVariant.stock}</span>{' '}
                                عدد
                            </p>
                        )}
                        {/* total */}
                        <div className='rounded-xl bg-mauve-100 p-4 flex items-center justify-between'>
                            <span className='font-bold text-mauve-800'>قیمت کل</span>
                            <span className='fa-num text-xl font-bold text-mauve-800'>
                                {Number(totalPrice).toLocaleString('fa-IR')}
                                <span className='text-sm font-normal ms-1'>تومان</span>
                            </span>
                        </div>
                    </>
                )}
                <Button onClick={handleAddToCart}
                    disabled={isAddingToCart}
                    className='w-full bg-mauve-700 hover:bg-mauve-800 text-white rounded-xl py-6 text-base transition disabled:opacity-70 disabled:cursor-not-allowed'>{isAddingToCart ? 'در حال افزودن...' : 'افزودن به سبد خرید'}</Button>
                {cartError && (
                    <span className='text-red-500 text-sm'>{cartError}</span>
                )}
            </div>
        </div >
    )
}

export default ProductVariant