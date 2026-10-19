'use client'
import { useAuth } from '@/context/AuthContext'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
    const router = useRouter()
    const { login, error } = useAuth()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('ایمیل معتبر نیست!').required('وارد کردن ایمیل الزامی است'),
            password: Yup.string().min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد').required('وارد کردن رمز عبور الزامی است')
        }),

        onSubmit: async (values) => {
            const result = await login(
                values.email,
                values.password
            )
            if (result.success) {
                router.push('/dashboard')
            }
            console.log('Login result:', result)
        }
    })
    return (
        <div className='grid grid-cols-2'>
            <div className='flex flex-col items-center h-screen justify-center gap-10 bg-mauve-300'>
                <h2 className='uppercase english-font'>lofi users login</h2>
                <span className='text-xl'>ورود به حساب کاربری</span>
                <form onSubmit={formik.handleSubmit} className='flex flex-col'>
                    <input type="email" name='email' placeholder='ایمیل' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border rounded px-2 py-1 mb-3' />
                    {formik.touched.email && formik.errors.email && (
                        <span className='text-red-500 text-sm mb-2'>
                            {formik.errors.email}
                        </span>
                    )}
                    <input type="password" name='password' placeholder='رمز عبور' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border rounded px-2 py-1' />
                    {formik.touched.password && formik.errors.password && (
                        <span className='text-red-500 text-sm mb-2'>
                            {formik.errors.password}
                        </span>
                    )}
                    {error && (
                        <span className='text-red-500 text-sm mt-2'>
                            {error}
                        </span>
                    )}
                    <button type="submit" disabled={formik.isSubmitting} className='bg-mauve-500 rounded text-white mt-3 disabled:opacity-50 disabled:cursor-not-allowed'>
                        {formik.isSubmitting ?  'درحال ورود...' : 'ورود'}
                    </button>
                </form>
                <Link href={'/dashboard'}>ورود به پنل</Link>
                <span>حساب کاربری ندارید؟  <Link href={'/signup'} className='text-mauve-500'>ثبت نام</Link></span>
                <Link href={'/'}>فراموشی رمز عبور</Link>
            </div>
            <div>
                <img src="/images/login/Lofi-login-image.png" alt="" className='w-full h-full' />
            </div>
        </div>
    )
}

export default LoginForm