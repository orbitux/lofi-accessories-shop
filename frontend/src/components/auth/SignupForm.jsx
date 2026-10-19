'use client'
import { useAuth } from '@/context/AuthContext'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const SignupForm = () => {
    const { register, error } = useAuth()
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            acceptTerms: false
        },
        validationSchema: Yup.object({
            name: Yup.string().trim().required('نام کاربری الزامی است'),
            email: Yup.string().email('ایمیل معتبر نیست').required('وارد کردن ایمیل الزامی است'),
            password: Yup.string().min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد').required('وارد کردن رمز عبور الزامی است'),
            acceptTerms: Yup.boolean().oneOf([true], 'پذیرش قوانین الزامی است')
        }),
        onSubmit: async (values) => {
            const result = await register(
                values.name,
                values.email,
                values.password,
            )
            if (result.success) {
                toast.success('ثبت نام با موفقیت انجام شد ',{
                    description:'حالا با اطلاعات ثبت شده میتوانید وارد حساب کاربری خود شوید'
                })
                router.push('/login')
            }
        }
    })
    return (
        <div className='grid grid-cols-2 '>
            <div className='flex flex-col items-center h-screen justify-center gap-10 bg-gray-300'>
                <h2 className='uppercase english-font'>lofi users signup</h2>
                <span className='text-xl'>ثبت نام کاربر</span>
                <form onSubmit={formik.handleSubmit} className='flex flex-col gap-2'>
                    <input type="text" name="name" placeholder='نام کاربری' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border rounded px-2 py-1 mb-3' />
                    {formik.touched.name && formik.errors.name && (
                        <span className='text-red-500 text-sm'>
                            {formik.errors.name}
                        </span>
                    )}
                    <input type="email" name='email' placeholder='ایمیل' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border rounded px-2 py-1 mb-3' />
                    {formik.touched.email && formik.errors.email && (
                        <span className='text-red-500 text-sm'>
                            {formik.errors.email}
                        </span>
                    )}
                    <input type="password" name='password' placeholder='رمز عبور' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border rounded px-2 py-1' />
                    {formik.touched.password && formik.errors.password && (
                        <span className='text-red-500 text-sm'>
                            {formik.errors.password}
                        </span>
                    )}
                    <div className='flex items-center gap-2'>
                        <span>قوانین و شرایط استفاده را مپذیرم</span>
                        <input type="checkbox" name="acceptTerms" value={formik.values.acceptTerms} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    </div>
                    {formik.touched.acceptTerms && formik.errors.acceptTerms && (
                        <span className='text-red-500 text-sm'>
                            {formik.errors.acceptTerms}
                        </span>
                    )}
                    {error && (
                        <span className='text-red-500 text-sm'>
                            {error.message}
                        </span>
                    )}
                    <button type="submit" disabled={formik.isSubmitting} className='bg-mauve-500 rounded text-white mt-3 disabled:opacity-50 disabled:cursor-not-allowed'>
                        {formik.isSubmitting ? 'درحال ثبت نام... ' : 'ثبت نام'}
                    </button>
                </form>
                <Link href={'/login'}>برگرد به صفحه ورود</Link>
            </div>
            <div>
                <img src="/images/login/Lofi-login-image.png" alt="" className='w-full h-full' />
            </div>
        </div>
    )
}

export default SignupForm