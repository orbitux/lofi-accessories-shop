'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { PiArrowBendLeftDownFill } from "react-icons/pi";
import { apiUrl } from '../api'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const CategoryCard = () => {
    const categoryRef = useRef(null)
    const [categories, setCategories] = useState([])
    useEffect(() => {
        gsap.fromTo(categoryRef.current, { opacity: 0, y: 80 }, {
            opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: {
                trigger: categoryRef.current,
                start: "top 85%",
                end: "top 60%",
                scrub: false,
                once: true
            }
        })
    }, [])
    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await apiUrl.get('/categories')
                setCategories(res.data)
            } catch (error) {
                console.error(error)
            }
        }
        getCategories()
    }, [])
    return (
        <div ref={categoryRef} className='category grid grid-cols-4 my-12 gap-10'>
            {categories.map((category, index) => (
                <div key={index} className='flex justify-center hover:-translate-y-3 transition-all'>
                    <Link href={`/${category.slug}`}>
                        <div className='flex items-center justify-center text-2xl mb-3'>
                            <span className='text-mauve-900'>{category.name}</span>
                            <PiArrowBendLeftDownFill />
                        </div>
                        <div className='bg-mauve-400 flex flex-col justify-center items-center gap-x-48 h-full w-full p-4 rounded-2xl'>
                            <img src={category.image_url} alt={category.alt_text} className='h-full w-full rounded-xl' />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default CategoryCard