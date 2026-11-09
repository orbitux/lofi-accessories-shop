'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'

const ProductError = ({ error, reset }) => {
    useEffect(() => {
        console.error(error)
    }, [error])
    return (
        <main className='container mx-auto min-h-[60vh] flex items-center justify-center px-4'>
            <div className='text-center flex flex-col items-center gap-5'>
                <span className='english-font text-5xl font-bold text-mauve-300'>Oops!</span>
                <h1 className='text-2xl font-bold text-mauve-900'>مشکلی در دریافت محصول پیش آمد</h1>
                <p className='text-mauve-500'>لطفا دوباره تلاش کنید یا به صفحه محصولات برگردید</p>
                <div className='flex gap-3'>
                    <button onClick={() => location.reload()} className='bg-mauve-800 text-white px-6 py-3 rounded-xl hover:bg-mauve-700 transition'>
                        تلاش مجدد
                    </button>
                    <Link href={'/products'} className='bg-mauve-200 text-mauve-900 px-6 py-3 rounded-xl hover:bg-mauve-300 transition'>
                        بازگشت به محصولات
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default ProductError