'use client'
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import CartSummary from './CartSummary';
import { getProductImages } from '@/api/product';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, getCarts, updateCart } from '@/api/carts';
import { setCart } from '@/store/cartSlice';
import { Lottie } from 'lottie-react';
import Link from 'next/link';
const CartItem = () => {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [actionLoading, setActionLoading] = useState(null)
    const [deleteLoading, setDeleteLoading] = useState(null)
    const [actionError, setActionError] = useState('')
    const items = useSelector(state => state.cart.items)
    const dispatch = useDispatch()
    const handleUpdateQuantity = async (itemId, quantity) => {
        setActionError('')
        try {
            setActionLoading(itemId)
            await updateCart(itemId, quantity)
            const cart = await getCarts()
            dispatch(setCart(cart))
        } catch (error) {
            console.error(error);
            setActionError('بروزرسانی تعداد محصول به مشکل مواجه شد !')
        } finally {
            setActionLoading(null)
        }
    }
    const handleDeleteItem = async (itemId) => {
        setActionError('')
        try {
            setDeleteLoading(itemId)
            await deleteCart(itemId)
            const cart = await getCarts()
            dispatch(setCart(cart))

        } catch (error) {
            console.error(error)
            setActionError('مشکلی در حذف محصول بوجود آمد!')
        } finally {
            setDeleteLoading(null)
        }
    }
    useEffect(() => {
        const loadImages = async () => {
            try {
                const responce = await getProductImages()
                setImages(responce)
            } catch (error) {
                console.error(error)
                setError('خطایی در دریافت اطلاعات سبد خرید رخ داد!')
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 2000)
            }
        }
        loadImages()
    }, [])
    if (loading) {
        return (
            <div className=' flex justify-center items-center'>
                <Lottie src={'/animations/loading/loading.json'} loop autoplay style={{ width: '80px', height: '80px' }} />
            </div>
        )
    }
    if (error) {
        return (
            <div className='flex flex-col items-center gap-10 h-100 justify-center'>
                <span className='text-2xl'>{error}</span>
                <button onClick={() => window.location.reload()} className='bg-mauve-500 w-50 rounded-full cursor-pointer text-white'>تلاش مجدد</button>
            </div>
        )
    }
    return (
        <>
            {items.length === 0 ? (
                <div className='container mx-auto px-4 py-20'>
                    <div className='flex flex-col items-center justify-center gap-5 text-center'>
                        <div className='w-20 h-20 rounded-full bg-mauve-50 flex items-center justify-center'>
                            <MdDelete size={32} className='text-mauve-400' />
                        </div>
                        <h2 className='text-xl md:text-2xl font-bold text-mauve-600'>
                            سبد خرید شما خالی است
                        </h2>
                        <p className='text-sm md:text-base text-gray-500'>
                            هنوز محصولی به سبد خریدت اضافه نکردی
                        </p>
                        <Link href="/products"
                            className='bg-mauve-500 hover:bg-mauve-600 transition-colors text-white px-8 py-2.5 rounded-full'
                        >
                            مشاهده محصولات
                        </Link>
                    </div>
                </div>
            ) : (
                <div className='container mx-auto px-4 pb-12'>
                    {actionError && (
                        <p className='text-red-500 text-sm text-center mb-5' role='alert'>{actionError}</p>
                    )}
                    <div className='grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-6 items-center'>
                        {/* Cart Items */}
                        <div className='flex flex-col gap-4'>
                            {items.map(item => {
                                const imageData = images.filter(image => image.product_id === item.product_id)
                                return (
                                    <div key={item.id}
                                        className='bg-white border border-mauve-100 rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow'
                                    >
                                        <div className='flex flex-col sm:flex-row gap-5'>
                                            {/* product image */}
                                            <div className='w-full sm:w-36 h-44 sm:h-36 shrink-0 bg-mauve-50 rounded-xl overflow-hidden'>
                                                {imageData[0]?.image_url ? (
                                                    <img src={imageData[0].image_url} alt={imageData[0].alt_text || item.product_name}
                                                        className='w-full h-full object-cover'
                                                    />
                                                ) : (
                                                    <div className='w-full h-full flex items-center justify-center text-sm text-gray-400'>
                                                        بدون تصویر
                                                    </div>
                                                )}
                                            </div>

                                            {/* Product Information */}
                                            <div className='flex-1 flex flex-col justify-between gap-5'>
                                                <div className='flex flex-col gap-3'>
                                                    <h3 className='font-bold text-gray-800 text-base md:text-lg'>
                                                        {item.product_name}
                                                    </h3>
                                                    <div className='flex flex-wrap gap-4 text-sm text-gray-500'>
                                                        <span>رنگ : <span className='text-gray-800 mr-1'>{item.color}</span></span>
                                                    </div>
                                                    <span>قیمت واحد : <span className='text-gray-800 mr-1 fa-num'>{item.price.toLocaleString('fa-IR')} تومان</span></span>
                                                </div>
                                            </div>
                                            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                                                {/* Quantity controller */}
                                                <div className='flex items-center gap-3'>
                                                    <span className='text-sm text-gray-500'>
                                                        تعداد :
                                                    </span>
                                                    <div className='flex items-center border border-mauve-200 rounded-lg overflow-hidden'>
                                                        <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                                            disabled={
                                                                item.quantity >= item.stock ||
                                                                actionLoading === item.id ||
                                                                deleteLoading === item.id
                                                            }
                                                            className='w-9 h-9 text-mauve-600 hover:bg-mauve-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed'
                                                        >
                                                            +
                                                        </button>
                                                        <span className='w-10 text-center text-sm fa-num'>
                                                            {actionLoading === item.id ? (
                                                                <Lottie src="/animations/actionLoading.json" loop autoplay
                                                                    style={{ width: '18px', height: '18px' }}
                                                                />
                                                            ) : item.quantity}
                                                        </span>
                                                        <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                                            disabled={
                                                                item.quantity <= 1 ||
                                                                actionLoading === item.id ||
                                                                deleteLoading === item.id
                                                            }
                                                            className='w-9 h-9 text-mauve-600 hover:bg-mauve-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed'
                                                        >
                                                            -
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* subTotal */}
                                                <div className='flex flex-col gap-1'>
                                                    <span className='text-xs text-gray-400'>قیمت کل محصول</span>
                                                    <span className='font-bold text-mauve-600 fa-num'>
                                                        {actionLoading === item.id ? (
                                                            <Lottie
                                                                src='/animations/actionLoading.json'
                                                                loop
                                                                autoplay
                                                                style={{ width: '20px', height: '20px' }}
                                                            />
                                                        ) : (
                                                            `${item.subtotal.toLocaleString('fa-IR')} تومان`
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Stock Message & Delete */}
                                            <div className='flex flex-wrap items-center justify-between gap-3'>
                                                <span className='text-xs text-orange-600'>
                                                    {item.quantity >= item.stock ? `حداکثر تعداد سفارش ${item.stock} عدد میباشد` :
                                                        item.quantity <= 1 ? 'حداقل تعداد سفارش 1 عدد میباشد' : ''
                                                    }
                                                </span>
                                                <button onClick={() => handleDeleteItem(item.id)}
                                                    disabled={
                                                        actionLoading === item.id ||
                                                        deleteLoading === item.id
                                                    }
                                                    className='flex items-center gap-1.5 text-sm text-red-500 hover:text-red-700 disabled:opacity-40 transition-colors'
                                                >
                                                    <MdDelete size={18} />
                                                    {deleteLoading === item.id ? 'درحال حذف...' : 'حذف محصول'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {/* Cart Summary */}
                        <CartSummary items={items} isUpdatingCart={actionLoading !== null} />
                    </div>
                </div>
            )}
        </>
    )
}

export default CartItem