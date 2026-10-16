import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";

const Add_address = ({ openAddModal, setOpenAddModal }) => {
    return (
        <>
            {openAddModal && (
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 bg-mauve-800 rounded p-10 flex flex-col gap-10'>
                    <div>
                        <div className='flex items-center justify-between mb-5'>
                            <h2 className='text-white text-center text-2xl'>اضافه کردن آدرس جدید</h2>
                            <IoMdCloseCircle className='text-white cursor-pointer' size={28} onClick={() => setOpenAddModal(!openAddModal)} />
                        </div>
                        <form action="" className='flex flex-col gap-5 *:not-[span]:border *:text-white *:not-[span]:border-mauve-400/30 *:rounded-full *:not-[span]:px-2 *:not-[span]:py-1'>
                            <span>نام آدرس</span>
                            <input type="text" placeholder='خانه - محل کار' />
                            <span>شماره تلفن گیرنده </span>
                            <input type="text" placeholder='09120000000' />
                            <span>استان</span>
                            <input type="text" placeholder='تهران' />
                            <span>شهر</span>
                            <input type="text" placeholder='تهران' />
                            <span>آدرس کامل</span>
                            <input type="text" placeholder='تهرانپارس کوچه قیوم آبادی پلاک تستی واحد تستی' />
                            <span>کد پستی</span>
                            <input type="text" placeholder='1689909980' />
                            <input type="submit" value={'ذخیره آدرس'} className='bg-green-600 rounded-2xl px-2 py-1' />
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default Add_address