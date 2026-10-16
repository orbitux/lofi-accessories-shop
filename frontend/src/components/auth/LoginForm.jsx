'use client'
import Link from 'next/link'
import React from 'react'

const LoginForm = () => {
    return (
        <div className='grid grid-cols-2 '>
            <div className='flex flex-col items-center justify-center gap-10 bg-mauve-300'>
                <h2 className='uppercase english-font'>lofi users login</h2>
                <span className='text-xl'>ورود به حساب کاربری</span>
                <form action="" onSubmit={(e) => e.preventDefault()} className='flex flex-col'>
                    <input type="text" placeholder='ایمیل' className='border rounded px-2 py-1 mb-3' />
                    <input type="password" placeholder='رمز عبور' className='border rounded px-2 py-1' />
                    <input type="submit" value="ورود" className='bg-mauve-500 rounded text-white mt-3' />
                </form>
                <Link href={'/dashboard'}>ورود به پنل</Link>
                <span>حساب کاربری ندارید؟  <Link href={'/signup'} className='text-mauve-500'>ثبت نام</Link></span>
                <Link href={'/'}>فراموشی رمز عبور</Link>
            </div>
            <div>
                <img src="/images/login/Lofi-login-image.png" alt="" className='w-full h-full object-contain' />
            </div>
        </div>
    )
}

export default LoginForm