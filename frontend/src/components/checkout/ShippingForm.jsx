import React from 'react'

const ShippingForm = () => {
    return (
        <div className='container mx-auto'>
            <span>لطفا فرم های زیر را جهت دریافت سفارش خود پر کنید</span>
            <form action="" className='flex flex-col gap-10 mt-10'>
                <div className='flex gap-3'>
                    <input type="text" placeholder='نام و نام خانوادگی' className='border border-mauve-400 rounded px-2 py-1 w-full' />
                    <input type="text" placeholder='شماره موبایل' className='border border-mauve-400 rounded px-2 py-1 w-full' />
                    <input type="text" placeholder='استان' className='border border-mauve-400 rounded px-2 py-1 w-full' />
                    <input type="text" placeholder='شهر' className='border border-mauve-400 rounded px-2 py-1 w-full' />
                </div>
                <div className='flex gap-3'>
                    <input type="text" placeholder='آدرس' className='border border-mauve-400 rounded px-2 py-1 w-full' />
                    <input type="text" placeholder='پلاک' className='border border-mauve-400 rounded px-2 py-1 w-full' />
                    <input type="text" placeholder='واحد' className='border border-mauve-400 rounded px-2 py-1 w-full' />
                    <input type="text" placeholder='کد پستی' className='border border-mauve-400 rounded px-2 py-1 w-full' />
                </div>
            </form>
        </div>
    )
}

export default ShippingForm