'use client'
import React from 'react'
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { useAuth } from '@/context/AuthContext';
import { User2Icon } from 'lucide-react';
const DashboardHeader = () => {
    const { user } = useAuth()
    return (
        <nav className='flex bg-mauve-300 gap-2 justify-end items-center w-full h-10'>
            {user.name}
            <User2Icon />
        </nav>
    )
}

export default DashboardHeader