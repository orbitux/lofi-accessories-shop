'use client'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/all'
import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(TextPlugin)
const HeroTitle = () => {
    const titleRef = useRef(null)
    const cursorRef = useRef(null)
    const typingRef = useRef(null)
    const timer = { value: 0 }
    useEffect(() => {
        const words = [
            "استایل متفاوت",
            "انتخاب متفاوت",
            "حس متفاوت",
        ]
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            })
            gsap.to(cursorRef.current, {
                opacity: 0,
                duration: 0.6,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            })
            // Typewriter timeline
            const tl = gsap.timeline({
                repeat: -1,
                delay: 0.5
            })
            words.map((word) => {
                tl.to(typingRef.current, {
                    duration: 1.5,
                    text: word,
                    ease: "none"
                })
                    .to(timer, {
                        value: 1,
                        duration: 0.8,
                    })
                    .to(typingRef.current, {
                        duration: 0.8,
                        text: "",
                        ease: "none"
                    })
                    .to(timer, {
                        value: 1,
                        duration: 0.3
                    })
            })
        }, titleRef)
        return () => ctx.revert()
    }, [])

    return (
        <div ref={titleRef}>
            <span ref={typingRef}></span>
            <span ref={cursorRef}>|</span>
        </div>
    )
}

export default HeroTitle