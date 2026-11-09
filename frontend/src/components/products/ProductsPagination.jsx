'use client'
import React from 'react'
import { FaArrowLeft, FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../ui/pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
const ProductsPagination = ({ currentPage, totalPages }) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const handlePageChange = (page) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('page', page)
        router.push(`${pathname}?${params.toString()}`)
    }
    return (
        <Pagination className='my-10'>
            <PaginationContent className={'flex items-center gap-10'}>
                <PaginationItem>
                    <PaginationLink href='#' aria-label='صفحه قبلی'
                        aria-disabled={currentPage === 1}
                        className={`gap-2 px-3 w-full flex items-center
                            ${currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}

                        onClick={(e) => {
                            e.preventDefault()
                            if (currentPage === 1) return
                            handlePageChange(currentPage - 1)
                        }}
                    >
                        <FaArrowRight size={14} />
                        <span>قبلی</span>
                    </PaginationLink>
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1
                    return (
                        <PaginationItem key={page}>
                            <PaginationLink href="#" isActive={currentPage === page}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handlePageChange(page)
                                }}
                            >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    )
                })}

                <PaginationItem>
                    <PaginationLink href='#'
                        aria-label='صفحه بعدی'
                        aria-disabled={currentPage === totalPages}
                        className={`gap-2 px-3 w-full flex items-center ${currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
                        onClick={(e) => {
                            e.preventDefault()
                            if (currentPage === totalPages) return
                            handlePageChange(currentPage + 1)
                        }}
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