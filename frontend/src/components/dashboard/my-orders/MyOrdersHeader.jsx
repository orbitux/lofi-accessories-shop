import React from 'react'
import RecentOrders from '../RecentOrders'
import MyAllOrders from './MyAllOrders'

const MyOrdersHeader = () => {
    return (
        <div>
            <h2 className='text-2xl '>سفارش های من</h2>
            <RecentOrders />
            <MyAllOrders />
        </div>
    )
}

export default MyOrdersHeader