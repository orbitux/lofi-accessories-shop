import { Lottie } from 'lottie-react';
import { ArrowLeft, ShoppingBag, Truck } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { BiSolidOffer } from "react-icons/bi";
const CartSummary = ({ items, isUpdatingCart }) => {
    const totalPrice = (items || []).reduce(
        (total, item) => total + Number(item.subtotal), 0
    )
    const totalQuantity = (items || []).reduce(
        (total, item) => total + Number(item.quantity), 0
    )
    return (
        <div className='bg-white border border-mauve-200 rounded-2xl p-5 shadow-sm flex flex-col gap-6 lg:sticky lg:top-24'>
            <div className='flex items-center gap-2 border-b border-mauve-100 pb-4'>
                <ShoppingBag size={21} className='text-mauve-500' />
                <h2 className='font-bold text-lg text-gray-800'>خلاصه سفارش</h2>
            </div>
            <div className='flex items-center justify-between text-sm'>
                <span className='text-gray-500'>
                    تعداد محصولات
                </span>
                <span className='font-medium fa-num text-gray-800'>
                    {totalQuantity} عدد
                </span>
            </div>
            <div className='flex items-center justify-between text-sm'>
                <span className='text-gray-500'>
                    جمع مبلغ محصولات
                </span>
                <span className='font-medium fa-num text-gray-800'>
                    {totalPrice.toLocaleString('fa-IR')} تومان
                </span>
            </div>

            <div className='flex items-center justify-between text-sm '>
                <span className='flex items-center gap-1 text-gray-500'>
                    <BiSolidOffer size={18} className='text-mauve-500' />
                    تخفیف
                </span>
                <span className='fa-num text-gray-800'>
                    - تومان
                </span>
            </div>
            <div className='border-t border-dashed border-mauve-200 pt-4 flex items-center justify-between gap-3'>
                <span className='font-bold text-gray-800'>
                    مبلغ قابل پرداخت
                </span>
                <span className='font-bold text-xl text-mauve-600 fa-num'>
                    {totalPrice.toLocaleString('fa-IR')} تومان
                </span>
            </div>
            <div className='flex items-start gap-2 bg-mauve-50 rounded-xl p-3'>
                <Truck size={18} className='text-mauve-500 shrink-0 mt-0.5' />
                <p className='text-xs text-gray-600 leading-6'>هزینه ارسال در مرحله بعد و بر اساس آدرس شما محاسبه میشود</p>
            </div>
            <Link href={'/checkout'}
                className='flex items-center justify-center gap-2 bg-mauve-500 hover:bg-mauve-600 transition-colors text-white rounded-xl py-3 px-4 font-medium'
            >
                ادامه فرآیند خرید
                <ArrowLeft size={18} />
            </Link>
            <p className='text-center text-xs text-gray-400'>
                محصولات انتخابی شما آماده ثبت سفارش هستند
            </p>
        </div>
    )
}

export default CartSummary