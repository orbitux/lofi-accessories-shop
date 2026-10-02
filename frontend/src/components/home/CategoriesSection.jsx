import React from 'react'
import CategoryCard from './CategoryCard'
import { PiArrowBendLeftDownFill } from "react-icons/pi";
const CategoriesSection = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex items-center mt-5'>
                <p className='text-2xl '>دسته بندی های محبوب <span className='text-mauve-500 text-3xl'>لوفی</span></p>
                <PiArrowBendLeftDownFill size={27}/>
            </div>
            <CategoryCard />
        </div>
    )
}

export default CategoriesSection