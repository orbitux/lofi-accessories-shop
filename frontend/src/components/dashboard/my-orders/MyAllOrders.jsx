import React from 'react'

const MyAllOrders = () => {
    return (
        <div className='flex justify-between mt-10'>
            <button>سفارش های جاری</button>
            <button>تکمیل شده</button>
            <button>لغو شده</button>
            <button>مرجوع شده</button>
        </div>
    )
}

export default MyAllOrders