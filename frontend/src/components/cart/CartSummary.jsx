import { Lottie } from 'lottie-react';
import Link from 'next/link';
import React from 'react'
import { BiSolidOffer } from "react-icons/bi";
const CartSummary = ({ items, isUpdatingCart }) => {
    const totalPrice = (items || []).reduce(
        (total, item) => total + Number(item.subtotal), 0
    )
    return (

        <div className='flex flex-col border border-mauve-200 gap-5 p-4 items-center'>
            <span className='text-2xl'>اطلاعات پرداخت</span>
            <span className='flex items-center gap-3'>جمع کل : <span className='text-2xl flex items-center gap-3 text-mauve-700'>{isUpdatingCart ? <Lottie src={'/animations/actionLoading.json'} loop autoplay style={{ width: '18px', height: '18px' }} /> : totalPrice.toLocaleString('fa-IR')} تومان </span></span>
            <span className='fa-num flex items-center gap-2 text-xl'><BiSolidOffer />تخفیف : 0</span>
            <span className='flex items-center gap-3'>مبلغ قابل پرداخت: <span className='text-2xl text-mauve-700 flex items-center gap-3'>{isUpdatingCart ? <Lottie src={'/animations/actionLoading.json'} loop autoplay style={{ width: '18px', height: '18px' }} /> : totalPrice.toLocaleString('fa-IR')} تومان</span></span>
            <Link href={'/checkout'} className='bg-mauve-500 text-center rounded-2xl py-1 px-2 w-1/3 text-white cursor-pointer'>نهایی سازی سفارش</Link>
        </div>
    )
}

export default CartSummary