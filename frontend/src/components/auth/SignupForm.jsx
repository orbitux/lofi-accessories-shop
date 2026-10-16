'use client'
import Link from 'next/link'
import React from 'react'

const SignupForm = () => {
    return (
        <div className='grid grid-cols-2 '>
            <div className='flex flex-col items-center justify-center gap-10 bg-gray-300'>
                <h2 className='uppercase english-font'>lofi users signup</h2>
                <span className='text-xl'>ثبت نام کاربر</span>
                <form action="" onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-2'>
                    <input type="text" placeholder='نام کاربری' className='border rounded px-2 py-1 mb-3' />
                    <input type="text" placeholder='ایمیل' className='border rounded px-2 py-1 mb-3' />
                    <input type="password" placeholder='رمز عبور' className='border rounded px-2 py-1' />
                    <div className='flex items-center gap-2'>
                        <span>قوانین و شرایط استفاده را مپذیرم</span>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <input type="submit" value="ثبت نام" className='bg-mauve-500 rounded text-white mt-3' />
                </form>
                <Link href={'/login'}>برگرد به صفحه ورود</Link>
            </div>
            <div>
                <img src="/images/login/Lofi-login-image.png" alt="" className='w-full h-full object-contain' />
            </div>
        </div>
    )
}

export default SignupForm