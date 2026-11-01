import React from 'react'
import { FaArrowLeft, FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../ui/pagination';
const ProductsPagination = () => {
    return (
        <Pagination className='my-10'>
            <PaginationContent className={'flex items-center gap-10'}>
                <PaginationItem>
                    <PaginationLink href='#' aria-label='صفحه قبلی' className='gap-2 px-3 w-full flex items-center'>
                        <FaArrowRight size={14} />
                        <span>قبلی</span>
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href='#'
                        isActive
                    >
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href='#'>
                        ۲
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink href='#'>
                        ۳
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink href='#'
                        aria-label='صفحه بعدی'
                        className='gap-2 px-3 w-full flex items-center'
                    >

                        <span>بعدی</span>
                        <FaArrowLeft size={14} />
                    </PaginationLink>
                </PaginationItem>

            </PaginationContent>
        </Pagination>
    )
}

export default ProductsPagination