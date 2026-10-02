import React from 'react'
import HeroSlider from './HeroSlider'
import Link from 'next/link'

const Hero = () => {
    return (
        <div>
            <div className="relative">
                <div className='absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10 mt-10  items-center'>
                    <p className='text-mauve-200 font-bold english-font'>LOFI ACCESSORIES</p>
                    <p className='text-[90px] font-bold text-white'>زیبایی در سادگیست</p>
                    <p className='text-[20px] font-light text-white'>اکسسوری های ظریف برای لحظه های خاص و استایل های روزمره تو</p>
                    <Link href={'/'} className='bg-mauve-500 rounded-2xl px-3 py-2 text-white cursor-pointer'>مشاهده محصولات</Link>
                </div>
                <div>
                    <div className='bg-black/50 w-full h-full absolute top-0 z-20'></div>
                    <HeroSlider />
                </div>
            </div>
        </div>
    )
}

export default Hero