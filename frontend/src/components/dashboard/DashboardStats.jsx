import React from 'react'
import { RxLapTimer } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { PiBasketLight } from "react-icons/pi";
const DashboardStats = () => {
    const stats = [
        {
            text: "سفارش ها",
            icon: <PiBasketLight size={24} />,
            count: 10,
            bg: "linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(83, 237, 188, 1) 100%)"
        },
        {
            text: "در حال پردازش",
            icon: <RxLapTimer size={24} />,
            count: 2,
            bg: "linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(96, 83, 237, 1) 100%)"
        },
        {
            text: "تکمیل شده",
            icon: <TiTick size={24} />,
            count: 8,
            bg: "linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(237, 83, 83, 1) 100%)"
        }
    ]
    return (
        <div className='grid grid-cols-3 gap-10'>
            {stats.map((stat, index) => (
                <div key={index} className={`flex items-center gap-2 rounded p-4 mt-5`} style={{ background: `${stat.bg}` }}>
                    <span>{stat.icon}</span>
                    <span>{stat.text}</span>
                    <span className='fa-num'>{stat.count}</span>
                </div>
            ))}
        </div>
    )
}

export default DashboardStats