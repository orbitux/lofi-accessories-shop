/* eslint-disable @next/next/no-img-element */

'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import SubMenu from '../SubMenu';
import BasketItems from '../BasketItems';
const Navbar = () => {
    const [openCategoriesSubMenu, setOpenCategoriesSubMenu] = useState(false)
    const [openCarts, setOpenCarts] = useState(false)
    const menuRef = useRef(null)
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target))
                setOpenCategoriesSubMenu(false)
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])
    return (
        <div className='flex justify-between items-center h-20 px-2 main-bg-color'>
            <div>
                <img src="/images/logo/logo.png" alt="logo" width={'80px'} height={'40px'} />
            </div>
            <div ref={menuRef} className='relative'>
                <ul className=' flex gap-6'>
                    <li>خانه</li>
                    <li>محصولات</li>
                    <button aria-expanded onClick={() => setOpenCategoriesSubMenu((prev) => !prev)} className='flex cursor-pointer items-center gap-2'>
                        <li>دسته بندی ها</li>
                        {openCategoriesSubMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </button>
                    <li>تماس با ما</li>
                </ul>
                {openCategoriesSubMenu && <SubMenu />}
            </div>
            <div className='flex gap-3'>
                <FiSearch size={32} />
                <IoPersonCircleOutline size={32} />
                <div className='relative' >
                    <div className='cursor-pointer' onClick={() => setOpenCarts(!openCarts)}>
                        <div className='absolute w-5 h-5 bg-mauve-500 top-0 rounded-full flex justify-center items-center text-white'>
                            <span className='text-sm fa-num'>0</span>
                        </div>
                        <BsCart2 size={32} />
                    </div>
                    <BasketItems openCarts={openCarts} />
                </div>
            </div>
        </div>
    )
}

export default Navbar