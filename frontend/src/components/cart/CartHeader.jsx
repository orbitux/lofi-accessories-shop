import { ShoppingBag } from 'lucide-react'
import React from 'react'

const CartHeader = () => {
    return (
        <div className='container mx-auto px-4 py-8'>
            <div className='flex flex-col items-center text-center gap-3'>
                <div className='flex items-center gap-2 text-mauve-500'>
                    <ShoppingBag size={20} />
                    <span className='text-sm font-medium tracking-wider'>LOFI COLLECTION</span>
                </div>
                <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>
                    سبد خرید شما
                </h1>
                <p className='text-sm md:text-base text-gray-500'>
                    محصولات انتخاب شده شما منتظر نهایی شدن سفارش هستند
                </p>
            </div>
            <div className='mt-8 border-b border-mauve-200' />
        </div>
    )
}

export default CartHeader