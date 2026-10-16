import Link from 'next/link'
import React from 'react'

const Main404 = () => {
    return (
        <div className='bg-mauve-400 h-screen'>
            <div className='flex flex-col gap-10 items-center h-full justify-center'>
                <p className='text-9xl'>404</p>
                <h1 className='text-4xl'>اوه! عزیزم متاسفانه صفحه ای که میخواستی وجود نداره</h1>
                <p className='text-2xl'>بیا کمکت کنم برگردی به صفحه اصلی فروشگاه تا راه رو گم نکنی</p>
                <Link href={'/'} className='bg-amber-300 rounded-full w-1/2 text-center py-1 shadow shadow-amber-400'>برگرد به صفحه اصلی </Link>
            </div>
        </div>
    )
}

export default Main404