'use client'
import { useAuth } from '@/context/AuthContext'
import React from 'react'

const DashboardWelcome = () => {
    const { user } = useAuth()
    return (
        <div>
            <h2>سلام, <span className='text-2xl font-bold text-mauve-700'>{user?.name}</span> عزیز به پنل کاربری خودت خوش اومدی </h2>
            <span>در این قسمت میتوانید حساب کاربری خودتون رو مدیریت کنید</span>
        </div>
    )
}

export default DashboardWelcome