import React from 'react'
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
const DashboardHeader = () => {
    return (
        <nav className='flex bg-mauve-300 gap-2 justify-end items-center w-full h-10'>
            <IoNotificationsCircleSharp size={28}/>
            <IoMdSettings size={28}/>
        </nav>
    )
}

export default DashboardHeader