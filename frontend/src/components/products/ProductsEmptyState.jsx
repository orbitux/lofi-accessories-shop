import Link from 'next/link'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

const ProductsEmptyState = ({ search, title }) => {
    return (
        <div className='flex flex-col items-center justify-center text-center py-20 px-4'>
            <div className='w-16 h-16 rounded-full bg-mauve-100 text-mauve-600 flex items-center justify-center mb-5'>
                <FiSearch size={32} />
            </div>
            <h2 className='text-2xl font-bold text-mauve-800 mb-3'>
                {title}
            </h2>
            <p className='text-mauve-700 max-w-md leading-8'>
                {search ? `برای ${search} محصولی پیدا نکردیم!` : 'در حال حاظر محصولی برای نمایش وجود ندارد.'}
            </p>
            <Link href='/products'
                className='mt-6 bg-mauve-800 text-white px-5 py-2.5 rounded-lg hover:bg-mauve-700 transition-colors'>
                مشاهده همه محصولات
            </Link>
        </div>
    )
}

export default ProductsEmptyState