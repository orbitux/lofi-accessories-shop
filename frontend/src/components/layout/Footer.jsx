import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
const Footer = () => {
    return (
        <div className='main-bg-color border-t-2 border-t-mauve-400'>
            <div className="grid grid-cols-4 gap-10 h-auto text-center">
                <div className='flex flex-col items-center'>
                    <p className='leading-10'>وبسایت لوفی اکسسوری مفتخر است تا با بهترین قیمت و تضمین کیفیت محصولات همراه مشتریان خود را راضی نگه داشته و برای استایل مشتریان ارزش قائل باشد</p>
                    <Image width={200} height={200} src="/images/logo/logo.png" alt="logo" />
                </div>
                <div>
                    <span className='text-2xl'>دسترسی سریع</span>
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <span className='text-2xl'>شبکه های اجتماعی </span>
                    <div className='flex gap-5'>
                        <FaInstagram size={24} />
                        <PiTelegramLogoLight size={24} />
                    </div>
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <span className='text-2xl'>تماس با ما</span>
                    <div className='flex flex-col gap-5'>
                        <Link href="tel:+989306136838"><span className='fa-num'>09306136838</span></Link>
                        <Link href="tel:+989211960688"><span className='fa-num'>09211960688</span></Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <span className='mb-5'>طراحی و توسعه : <Link href={'https://orbitux.space'}>orbitux</Link></span>
            </div>
        </div>
    )
}

export default Footer