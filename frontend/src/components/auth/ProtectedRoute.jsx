'use client'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import LottieAnimation from '../common/LottieAnimation'
import { Lottie } from 'lottie-react'

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const router = useRouter()
    useEffect(() => {
        if (!loading && !user) {
            router.replace('/login')
        }
    }, [loading, router, user])

    if (loading) {
        return (
            <span>در حال بررسی احراز هویت...</span>
        )
    }
    if (!user) {
        return null
    }
    return children
}

export default ProtectedRoute