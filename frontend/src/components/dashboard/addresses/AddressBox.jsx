import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Add_address from './Add_address';
const AddressBox = () => {
    return (
        <div className=' flex flex-col mt-10'>
            <div>
                <h2>آدرس اصلی</h2>
                <div className='bg-mauve-200 my-3 flex justify-between gap-2  rounded w-full p-4'>
                    <div>
                        <span>تهران , کوچه قیوم ابادی پلاک ۵۴ واحد ۵</span>
                        <span>کد پستی : 1686637517</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaRegEdit size={22} />
                        <MdDelete size={22} />
                    </div>
                </div>
            </div>
            <h2>آدرس دوم</h2>
            <div className='bg-mauve-200 my-3 flex justify-between gap-2  rounded w-full p-4'>
                <div>
                    <span>تهران , کوچه قیوم ابادی پلاک ۵۴ واحد ۵</span>
                    <span>کد پستی : 1686637517</span>
                </div>
                <div className='flex items-center gap-2'>
                    <FaRegEdit size={22} />
                    <MdDelete size={22} />
                </div>
            </div>

        </div>
    )
}

export default AddressBox