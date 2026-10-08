/* eslint-disable @next/next/no-img-element */

'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import SubMenu from '../home/SubMenu';
import BasketItems from '../home/BasketItems';
import LoginBox from '../home/LoginBox';
import Link from 'next/link';
const Navbar = () => {
    const [openCategoriesSubMenu, setOpenCategoriesSubMenu] = useState(false)
    const [openCarts, setOpenCarts] = useState(false)
    const [openLogin, setOpenLogin] = useState(false)
    const menuRef = useRef(null)
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target))
                setOpenCategoriesSubMenu(false)
            setOpenCarts(false)
            setOpenLogin(false)
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])
    return (
        <div ref={menuRef} className='flex justify-between items-center h-20 px-2 main-bg-color'>
            <div>
                <img src="/images/logo/logo.png" alt="logo" width={'80px'} height={'40px'} />
            </div>
            <div className='relative'>
                <ul className=' flex gap-6'>
                    <Link href={'/'}>
                        <li>خانه</li>
                    </Link>
                    <Link href={'/products'}><li>محصولات</li></Link>
                    <button aria-expanded onMouseEnter={() => setOpenCategoriesSubMenu((prev) => !prev)} className='flex cursor-pointer items-center gap-2'>
                        <li>دسته بندی ها</li>
                        {openCategoriesSubMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </button>
                    <li>تماس با ما</li>
                </ul>
                <div onMouseLeave={() => setOpenCategoriesSubMenu(false)}>
                    {openCategoriesSubMenu && <SubMenu />}
                </div>
            </div>
            <div className='flex gap-3'>
                <FiSearch size={32} />
                <div className='relative'>
                    <div className='cursor-pointer' onClick={() => setOpenLogin((prev) => !prev)}>
                        <IoPersonCircleOutline size={32} />
                    </div>
                    <LoginBox openLogin={openLogin} />
                </div>
                <div className='relative' >
                    <div className='cursor-pointer' onClick={() => setOpenCarts((prev) => !prev)}>
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