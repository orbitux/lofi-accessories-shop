import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutSection = () => {
    return (
        <div className='container mx-auto mb-36'>
            <div className='grid grid-cols-2 items-center justify-between gap-10'>
                {/* Text */}
                <div className=' flex flex-col gap-10 text-center'>
                    <p className='text-4xl'>درباره <span className='text-mauve-700'>لوفی</span></p>
                    <span className='text-2xl '>زیبایی در سادگیست</span>
                    <span className='text-black/90'>لوفی معتقد است زیبایی هر انسان در سادگی اوست , به همین دلیل است که لوفی فروش محصولات اکسسوری خود را بر مبنای سادگی ولی زیبا قرار داده است تا به مشتریان خود این پیام رابرساند که حتما نیازی به استفاده از اکسسوری های خیلی شلوغ با طرح های عجیب نیست و میتوان با اکسسوری های مینیمال و ساده حسابی بدرخشند.</span>
                    <div className='flex justify-center'>
                        <Link href={'/'} className='bg-mauve-500 border border-mauve-800 hover:bg-white hover:text-mauve-800 transition-all rounded-full px-3 py-2 text-white'>درباره لوفی بیشتر بدانید</Link>
                    </div>
                </div>

                <div className='relative h-130'>
                    <Image width={210} height={210} src="/images/about_us/1.jpg" alt="" className='absolute top-8 right-4 rounded-lg -rotate-3' />
                    <Image width={190} height={190} src="/images/about_us/3.jpg" alt="" className='absolute top-2 right-72 rounded rotate-[4deg]' />
                    <Image width={200} height={200} src="/images/about_us/4.jpg" alt="" className='absolute top-56 right-44 rounded -rotate-5' />
                    <Image width={210} height={210} src="/images/about_us/5.jpg" alt="" className='absolute bottom-0 right-0 rounded rotate-3' />
                    <Image width={180} height={180} src="/images/about_us/6.jpg" alt="" className='absolute bottom-12 right-80 rounded rotate-[-4deg]' />
                </div>
            </div>
        </div>
    )
}

export default AboutSection