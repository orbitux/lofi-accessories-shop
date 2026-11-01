import React from 'react'
import { useSelector } from 'react-redux'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { BsCart2, BsCartX } from 'react-icons/bs'
import Link from 'next/link'
import { Button } from '../ui/button'

const BasketItems = () => {
    const { items, totalQuantity } = useSelector(state => state.cart)
    const totalPrice = items.reduce((total, item) => total + Number(item.subtotal), 0)
    return (
        <Popover>
            <PopoverTrigger render={<Button className='relative cursor-pointer bg-mauve-600 fa-num'>{totalQuantity}<BsCart2 size={32} /></Button>}></PopoverTrigger>
            <PopoverContent align='end' className='w-80 p-4 bg-mauve-300'>
                {items.length === 0 ? (
                    <div className='flex flex-col items-center justify-center gap-3 py-8'>
                        <BsCartX size={40} />
                        <span className='text-lg'>سبد خرید شما خالی است</span>
                        <Link href={'/products'} className='bg-mauve-500 text-white px-4 py-2 rounded'>مشاهده محصولات</Link>
                    </div>
                ) : (
                    <div className='flex flex-col gap-4'>
                        <div className='flex justify-between items-center'>
                            <span className='font-semibold'>سبد خرید شما</span>
                            <span className='text-sm fa-num'>{totalQuantity} کالا</span>
                        </div>
                        <div className='flex flex-col gap-3 max-h-64 overflow-y-auto'>
                            {items.map(item => (
                                <div key={item.id} className='flex justify-between items-center gap-3 border-b pb-3'>
                                    <div className='flex flex-col gap-1'>
                                        <span>{item.product_name}</span>
                                        <img src={item.product_image} alt={item.product_name} className='w-20 h-20 rounded' />
                                        <span className='text-sm text-muted-foreground fa-num'>{item.color} x {item.quantity}</span>
                                    </div>
                                    <span className='text-sm whitespace-nowrap'>{Number(item.subtotal).toLocaleString('fa-IR')} تومان</span>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-between font-semibold'>
                            <div className='flex items-center gap-2'>
                                <span>مجموع</span>
                                <span>{totalPrice.toLocaleString('fa-IR')} تومان</span>
                            </div>
                            <Link href={'/cart'} className='bg-mauve-500 text-white text-center px-4 py-2 rounded'>مشاهده سبد خرید</Link>
                        </div>
                    </div>
                )}
            </PopoverContent>
        </Popover>
    )
}

export default BasketItems