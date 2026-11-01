import React from 'react'

const CategoryPageSlugHeader = ({ category }) => {
    return (
        <header className='flex flex-col items-center text-center mt-12 mb-10 px-4'>
            <h1 className='english-font uppercase text-mauve-600 font-bold text-4xl sm:text-5xl tracking-wide'>lofi collection</h1>
            <p className='text-2xl sm:text-3xl font-bold text-mauve-800 mt-3'>{category.name}</p>
            <p className='text-mauve-700 mt-4 max-w-xl leading-8'>محصولات کالکشن <span className='text-xl font-bold'>{category.name}</span> را مشاهده کنید</p>
        </header>
    )
}

export default CategoryPageSlugHeader