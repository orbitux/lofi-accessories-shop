import React from 'react'
import { BsArrowDown } from 'react-icons/bs'

const ProductsHeader = () => {
    return (
        <header className='flex flex-col items-center text-center mt-12 mb-10 px-4'>
            <h1 className='english-font uppercase text-mauve-600 font-bold text-4xl sm:text-5xl tracking-wide'>lofi collection</h1>
            <p className='text-2xl sm:text-3xl font-bold text-mauve-800 mt-3'>محصولات لوفی</p>
            <span className='text-mauve-700 mt-4 max-w-xl leading-8'>اکسسوری‌های ظریف و مینیمال،
                <br className='sm:hidden' />
                برای استایلی که سادگی را دوست دارد.</span>
            <div className='mt-6 w-10 h-10 rounded-full bg-mauve-600 text-white flex items-center justify-center animate-bounce'>
                <BsArrowDown />
            </div>
        </header>
    )
}

export default ProductsHeader