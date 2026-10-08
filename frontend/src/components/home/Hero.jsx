'use client'
import HeroSlider from './HeroSlider'
import Link from 'next/link'
import { Lottie } from 'lottie-react'
import HeroTitle from './HeroTitle'
import { useRef } from 'react'

const Hero = () => {
    return (
        <div className="relative">
            <div className='absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10 mt-10  items-center'>
                <p className='text-mauve-200 font-bold english-font'>LOFI ACCESSORIES</p>
                <div>
                    <p className='text-[90px] font-bold text-white'>
                        <HeroTitle />
                    </p>
                </div>
                <p className='text-[20px] font-light text-white'>اکسسوری های ظریف برای لحظه های خاص و استایل های روزمره تو</p>
                <Link href={'/products'} className='bg-mauve-500 rounded-2xl px-3 py-2 text-white cursor-pointer'>مشاهده محصولات</Link>
                <div className='w-10 flex justify-center items-center bg-mauve-300 rounded-full'>
                    <Lottie src={'/lottie/Arrow_Down.json'} autoplay loop />
                </div>
            </div>
            <div>
                <div className='bg-black/50 w-full h-full absolute top-0 z-20'></div>
                <HeroSlider />
            </div>
        </div>
    )
}

export default Hero