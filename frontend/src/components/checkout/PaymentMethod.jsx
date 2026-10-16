import React from 'react'

const PaymentMethod = ({ items }) => {
    const totalPrice = (items || []).reduce(
        (total, item) => total + Number(item.subtotal), 0
    )
    const shippingPrice = 150000
    const finallyPrice = totalPrice + shippingPrice
    return (
        <div className='flex flex-col gap-5'>
            <span>جمع کل محصولات : {totalPrice.toLocaleString('fa-IR')}</span>
            <span >هزینه ارسال : {shippingPrice.toLocaleString('fa-IR')}</span>
            <span>قابل پرداخت: {finallyPrice.toLocaleString('fa-IR')}</span>
            <span>انتخاب روش پرداخت</span>
            <select name="" id="" className='border border-mauve-500 rounded'>
                <option value="">درگاه آنلاین</option>
                <option value="">کارت به کارت</option>
                <option value="">پرداخت درب منزل با کارت بانکی</option>
            </select>
            <div className='flex justify-center text-white'>
                <button className='bg-mauve-600 w-2/3 rounded-2xl py-1 px-2'>پرداخت و ثبت سفارش</button>
            </div>
        </div>
    )
}

export default PaymentMethod