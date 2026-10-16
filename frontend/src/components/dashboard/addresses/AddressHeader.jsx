'use client'
import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import Add_address from './Add_address';
const AddressHeader = () => {
    const [openAddModal, setOpenAddModal] = useState(false)
    return (
        <div className=' flex justify-between w-200'>
            <div>
                <h2>آدرس های من</h2>
            </div>
            <div onClick={() => setOpenAddModal(!openAddModal)} className='flex items-center cursor-pointer bg-mauve-600 rounded px-2 py-1 text-white'>
                <IoMdAdd />
                <button>افزودن آدرس جدید</button>
            </div>
            <Add_address openAddModal={openAddModal} setOpenAddModal={setOpenAddModal} />
        </div>
    )
}

export default AddressHeader