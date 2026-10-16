import React from 'react'

const CartHeader = () => {
    return (
        <div className='flex flex-col items-center gap-2 my-3'>
            <span className='text-2xl'>سبد خرید شما</span>
            <span className='text-xl'>محصولات انتخاب شده شما</span>
        </div>
    )
}

export default CartHeader