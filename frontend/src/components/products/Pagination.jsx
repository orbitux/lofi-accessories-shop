import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
const Pagination = () => {
    return (
        <div>
            <div className='flex items-center gap-10 my-10 justify-center'>
                <FaLongArrowAltRight />
                <span className='fa-num'>1</span>
                <span className='fa-num'>2</span>
                <span className='fa-num'>3</span>
                <span className='fa-num'>4</span>
                <FaLongArrowAltLeft />
            </div>
        </div>
    )
}

export default Pagination