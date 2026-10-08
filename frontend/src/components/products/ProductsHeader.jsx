import React from 'react'
import { BsArrowDown } from 'react-icons/bs'

const ProductsHeader = () => {
    return (
        <div>
            <div className=' flex flex-col gap-5 mt-10 mb-10 items-center'>
                <h1 className='english-font uppercase text-mauve-600 font-bold text-4xl '>lofi collection</h1>
                <p className='text-2xl text-mauve-800'>محصولات لوفی</p>
                <span className='text-mauve-700'>اکسسوری‌های ظریف و مینیمال،
                    برای استایلی که سادگی را دوست دارد.</span>
                <div className='bg-mauve-600 rounded-full p-2 text-white font-bold'>
                    <BsArrowDown />
                </div>
            </div>
        </div>
    )
}

export default ProductsHeader