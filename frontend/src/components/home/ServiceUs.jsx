import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { RiDiscountPercentLine } from "react-icons/ri";
import { GiDoubleNecklace } from "react-icons/gi";
import { MdPriceCheck } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
const ServiceUs = () => {
    return (
        <div className='container mx-auto my-12'>
            <div className='flex justify-between'>
                <div className='flex flex-col items-center'>
                    <CiDeliveryTruck size={80} color='red' />
                    <span>ارسال سریع</span>
                </div>
                <div className='flex flex-col items-center'>
                    <RiDiscountPercentLine size={80} color='blue' />
                    <span>تخفیف های ویژه</span>
                </div>
                <div className='flex flex-col items-center'>
                    <MdSupportAgent size={80} color='purple' />
                    <span>پشتیبانی قدرتمند</span>
                </div>
                <div className='flex flex-col items-center'>
                    <GiDoubleNecklace size={80} color='darkgoldenrod' />
                    <span>تضمین کیفیت</span>
                </div>
                <div className='flex flex-col items-center'>
                    <MdPriceCheck size={80} color='green' />
                    <span>قیمت اقتصادی و مناسب</span>
                </div>
            </div>
        </div>
    )
}

export default ServiceUs