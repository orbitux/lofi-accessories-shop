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
import { useSelector } from 'react-redux';
import SearchBox from '../home/SearchBox';
const Navbar = () => {
    const [openCategoriesSubMenu, setOpenCategoriesSubMenu] = useState(false)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    return (
        <div className='flex justify-between items-center h-20 px-2 main-bg-color'>
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
                <SearchBox />

                <LoginBox />
                <BasketItems />
            </div>
        </div>
    )
}

export default Navbar