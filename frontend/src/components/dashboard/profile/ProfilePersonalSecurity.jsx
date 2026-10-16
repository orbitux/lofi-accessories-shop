import React from 'react'

const ProfilePersonalSecurity = () => {
    return (
        <div className='mt-10 flex flex-col gap-5'>
            <h2>امنیت حساب</h2>
            <span>تغییر رمز عبور</span>
            <form action="" className='flex flex-col w-full gap-5'>
                <input type="password" placeholder='رمز فعلی' className='border border-mauve-400 rounded w-full py-1.5 px-3' />
                <input type="password" placeholder='رمز جدید' className='border border-mauve-400 rounded w-full py-1.5 px-3' />
                <input type="password" placeholder='تکرار رمز جدید' className='border border-mauve-400 rounded w-full py-1.5 px-3' />
                <input type="submit" value="تغییر رمز" className='bg-mauve-400 w-full rounded-full py-1 cursor-pointer' />
            </form>
        </div>
    )
}

export default ProfilePersonalSecurity