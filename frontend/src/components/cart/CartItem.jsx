'use client'
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import CartSummary from './CartSummary';
import { getProductImages } from '@/api/product';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, getCarts, updateCart } from '@/api/carts';
import { setCart } from '@/store/cartSlice';
import { Lottie } from 'lottie-react';
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
                <Lottie src={'/animations/loading.json'} loop autoplay style={{ width: '80px', height: '80px' }} />
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
                <div className='flex flex-col items-center justify-center gap-10'>
                    <span className='text-2xl font-bold text-mauve-600'>فعلا سبد خرید شما خالی است</span>
                    <span className='text-lg text-gray-900'>اگر خواستی میتونی دکمه زیر رو بزنی تا وارد صفحه محصولات بشی و محصول مورد نظرت رو به سبد خرید اضافه کنی</span>
                    <button className='bg-mauve-500 px-2 py-1 w-50 rounded-full text-white cursor-pointer'>محصولات</button>
                </div>
            ) : (
                <>
                    <div className='grid grid-cols-2'>
                        <div className='border border-mauve-200'>
                            {actionError && (
                                <p className="text-red-500 text-sm text-center" role="alert">{actionError}</p>
                            )}
                            {items.map(item => {
                                const imageData = images.filter(image => image.product_id === item.product_id)
                                return (
                                    <div key={item.id} className='flex flex-col border-b gap-3 items-center p-4 overflow-auto border-mauve-200'>
                                        <div className='flex items-center'>
                                            {imageData.map(img => (
                                                <div key={img.id}>
                                                    <img src={img?.image_url} alt={img.alt_text || item.product_name} className='w-20 h-20 rounded' />
                                                </div>

                                            ))}
                                            <span>نام محصول : {item.product_name}</span>
                                        </div>
                                        <span>رنگ انتخابی : {item.color}</span>
                                        <span>قیمت محصول : {item.price.toLocaleString('fa-IR')}</span>

                                        <span className='fa-num flex items-center'>تعداد : {actionLoading === item.id ? <Lottie src={'/animations/actionLoading.json'} loop autoplay style={{ width: '15px', height: '15px' }} /> : item.quantity}</span>
                                        <span className='flex items-center'>قیمت کل محصول : {actionLoading === item.id ? <Lottie src={'/animations/actionLoading.json'} loop autoplay style={{ width: '15px', height: '15px' }} /> : item.subtotal.toLocaleString('fa-IR')}</span>

                                        <div className='flex  items-center gap-5'>
                                            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                                disabled={
                                                    item.quantity >= item.stock ||
                                                    actionLoading === item.id
                                                }
                                                className='bg-red-400 rounded-full px-2 disabled:opacity-50 disabled:cursor-not-allowed'>+</button>
                                            <span className='fa-num'>{actionLoading === item.id ? <Lottie src={'/animations/actionLoading.json'} loop autoplay style={{ width: '15px', height: '15px' }} /> : item.quantity}</span>
                                            <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                                disabled={
                                                    item.quantity <= 1 ||
                                                    actionLoading === item.id
                                                }
                                                className='bg-green-400 rounded-full px-2 disabled:opacity-50 disabled:cursor-not-allowed'>-</button>

                                        </div>
                                        <span className='text-sm text-red-500 fa-num'>{item.quantity >= item.stock ? `حداکثر تعداد سفارش ${item.stock} عدد میباشد` : item.quantity <= 1 && `حداقل تعداد سفارش 1 عدد میباشد`}</span>
                                        <button onClick={() => handleDeleteItem(item.id)} disabled={actionLoading === item.id} className='flex items-center cursor-pointer bg-red-400 w-50 rounded-2xl font-bold justify-center'>
                                            {deleteLoading === item.id ? 'درحال حذف...' : (
                                                <>
                                                    <MdDelete />
                                                    حذف محصول
                                                </>
                                            )}

                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                        <CartSummary items={items} isUpdatingCart={actionLoading !== null} />
                    </div >
                </>
            )
            }


        </>
    )
}

export default CartItem