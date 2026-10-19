'use client'
import { useAuth } from '@/context/AuthContext'
import React from 'react'

const ProfilePersonal = () => {
    const { user } = useAuth()
    return (
        <div className='mt-10 flex flex-col gap-5 w-full'>
            <h2>اطلاعات شخصی</h2>
            <form action="" className='flex flex-col items-center gap-3'>
                <input type="text" className='border border-mauve-500 rounded py-1.5 px-3 w-full' placeholder='نام کاربری' value={user?.name} />
                <input type="text" className='border border-mauve-500 rounded py-1.5 px-3 w-full' placeholder='ایمیل' value={user?.email} />
                <input type="text" className='border border-mauve-500 rounded py-1.5 px-3 w-full' placeholder='شماره موبایل' value={'09120000000'} />
                <input type="submit" value="ذخیره تغییرات" className='bg-mauve-400 rounded-full w-full py-1 cursor-pointer' />
            </form>
        </div>
    )
}

export default ProfilePersonal