'use client'
import Link from 'next/link'
import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import { CiShoppingBasket } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const DashboardSidebar = () => {
    const { logout } = useAuth()
    const router = useRouter()
    const handleLogout = async () => {
        await logout()
        router.replace('/login')
    }
    const menuItems = [
        {
            icon: <BiSolidDashboard size={24} />,
            text: "داشبورد",
            link: '/dashboard'
        },
        {
            icon: <CiShoppingBasket size={24} />,
            text: "سفارش های من",
            link: '/dashboard/my-orders'
        },
        {
            icon: <FaHome size={24} />,
            text: "آدرس ها",
            link: '/dashboard/addresses'
        },
        {
            icon: <CgProfile size={24} />,
            text: "پروفایل",
            link: '/dashboard/profile'
        },
        {
            icon: <IoIosSettings size={24} />,
            text: "تنظیمات کاربری",
            link: '/'
        }
    ]
    return (
        <div>
            <div className=' bg-mauve-300 w-100 h-screen overflow-auto'>
                <div className='flex items-center justify-center'>
                    <img src="/images/logo/logo.png" alt="" className='w-20 h-20 flex' />
                    <span className='text-2xl'>حساب کاربری</span>
                </div>
                <div className='flex flex-col gap-5 mt-5 ps-3'>
                    {menuItems.map((item, index) => (
                        <Link href={item.link} key={index} className='flex items-center gap-2 hover:bg-mauve-600 hover:text-white rounded-2xl p-4'>
                            <div className='flex items-center gap-5'>
                                <div>{item.icon}</div>
                                <span>{item.text}</span>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className='flex flex-col justify-end h-1/2'>
                    <div className='w-full h-0.5 bg-mist-500'></div>
                    <div onClick={handleLogout} className='flex items-center gap-2 ps-2 p-4'>
                        <IoExitOutline size={24} />
                        <button>خروج از حساب کاربری</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardSidebar
