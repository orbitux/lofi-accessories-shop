import React from 'react'

const ProductsToolbar = ({ products }) => {
    return (
        <div className='container mx-auto mb-3 flex justify-center'>
            <div className='border border-mauve-400 bg-mauve-300 flex justify-between items-center px-2 py-1  w-1/2 rounded'>
                <span className='text-lg'><span className='fa-num text-mauve-800 font-bold'>{products.length}</span> محصول </span>
                <select name="" id="">
                    <option value="">مرتب سازی</option>
                    <option value="">ارزانترین</option>
                    <option value="">گرانترین</option>
                    <option value="">پرتخفیف ترین</option>
                    <option value="">محبوب ترین</option>
                </select>
                <select name="" id="">
                    <option value="">همه دسته ها</option>
                    <option value="">گردنبند</option>
                    <option value="">دستبند</option>
                    <option value="">بنگل</option>
                </select>
            </div>
        </div>
    )
}

export default ProductsToolbar