import React from 'react'
import ProfilePersonal from './ProfilePersonal'
import ProfilePersonalSecurity from './ProfilePersonalSecurity'

const ProfileHeader = () => {
    return (
        <div className='w-100'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-2xl'>پروفایل من</h1>
                <span>اطلاعات حساب کاربری خودرا مدیریت کنید</span>
            </div>
            <ProfilePersonal />
            <ProfilePersonalSecurity />
        </div>
    )
}

export default ProfileHeader