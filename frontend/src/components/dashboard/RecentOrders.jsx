import React from 'react'
import { FcCancel } from "react-icons/fc";
import { TiTick } from "react-icons/ti";
import { CgSandClock } from "react-icons/cg";
const RecentOrders = () => {
    const orders = [
        {
            orderNumber: '#1032',
            status: "تکمیل شده",
            iconStatus: <TiTick color='green' />,
            colorStatus: "green",
            product: "گردنبند مدل قلب",
            price: 345000
        },
        {
            orderNumber: '#1033',
            status: "در حال پردازش",
            iconStatus: <CgSandClock color='blue' />,
            colorStatus: "blue",
            product: "گردنبند مدل ستاره",
            price: 505000
        }, {
            orderNumber: '#1034',
            status: "لغو شده",
            iconStatus: <FcCancel />,
            colorStatus: "red",
            product: "گردنبند مدل ماه",
            price: 420000
        }
    ]
    return (
        <div className='mt-10'>
            <span>وضعیت آخرین سفارش ها</span>
            <table className='border-separate border border-gray-400 mt-3 w-full'>
                <thead>
                    <tr>
                        <th className='border border-mauve-500 p-4'>نام محصول</th>
                        <th className='border border-mauve-500 p-4'>قیمت</th>
                        <th className='border border-mauve-500 p-4'>وضعیت سفارش</th>
                        <th className='border border-mauve-500 p-4'>شماره سفارش</th>
                    </tr>
                </thead>
                {orders.map((order, index) => (
                    <tbody key={index}>
                        <tr>
                            <td className='border border-mauve-500 p-3 text-center'>{order.product}</td>
                            <td className='border border-mauve-500 p-3 text-center'>{order.price.toLocaleString('fa-IR')}</td>
                            <td className={`border border-mauve-500 p-3 text-center flex items-center gap-2`} style={{ color: `${order.colorStatus}` }}>{order.iconStatus}{order.status}</td>
                            <td className='border border-mauve-500 p-3 text-center fa-num'>{order.orderNumber}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default RecentOrders