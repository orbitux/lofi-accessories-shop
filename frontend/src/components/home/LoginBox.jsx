import Link from 'next/link'
import React from 'react'

const LoginBox = ({ openLogin }) => {
    return (
        <>
            {openLogin && (
                <div className='absolute top-10 left-0 z-50 w-100'>
                    <div className='bg-mauve-400 rounded flex flex-col items-center justify-center gap-10 p-4'>
                        <span>وارد حساب کاربری خود شوید!</span>
                        <div className='flex justify-between gap-10'>
                            <Link href={'/'} className='bg-mist-300 px-2 py-1 rounded'>ورود</Link>
                            <Link href={'/'} className='bg-mist-700 text-white px-2 py-1 rounded'>ثبت نام</Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default LoginBox