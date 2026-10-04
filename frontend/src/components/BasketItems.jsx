import React from 'react'

const BasketItems = ({ openCarts }) => {
    return (
        <>
            {openCarts && (
                <div className='bg-mauve-300 rounded w-100 h-64 left-0 top-10 overflow-auto absolute z-50'>
                    <div className='flex justify-center items-center h-full'>
                        <span className='text-xl'>سبد خرید شما خالی است!</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default BasketItems