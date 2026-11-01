import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { SlidersHorizontal } from 'lucide-react'

const ProductsToolbar = ({ products }) => {
    return (
        <div className='mb-8 container mx-auto'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4 border border-mauve-200 bg-mauve-50 rounded-xl p-4'>
                {/* Products count */}
                <div className='text-mauve-800 text-lg'>
                    <span className='fa-num font-bold text-mauve-900'>{products.length}</span>
                    <span className='ms-1'>محصول</span>
                </div>

                {/* Control */}
                <div className='flex flex-wrap items-center justify-center gap-3'>
                    <Select>
                        <SelectTrigger className='w-40 bg-white'>
                            <SelectValue placeholder='مرتب سازی' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='cheapest'>
                                ارزانترین
                            </SelectItem>
                            <SelectItem value='expensive'>
                                گرانترین
                            </SelectItem>
                            <SelectItem value='discount'>
                                پرتخفیف ترین
                            </SelectItem>
                            <SelectItem value='popular'>
                                محبوب ترین
                            </SelectItem>
                        </SelectContent>
                    </Select>
                    {/* Category */}
                    <Select>
                        <SelectTrigger className='w-40 bg-white'>
                            <SelectValue placeholder='همه دسته ها' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='all'>
                                همه دسته ها
                            </SelectItem>
                            <SelectItem value='necklaces'>
                                گردنبند
                            </SelectItem>

                            <SelectItem value='bracelets'>
                                دستبند
                            </SelectItem>

                            <SelectItem value='bangles'>
                                بنگل
                            </SelectItem>
                        </SelectContent>
                    </Select>

                    {/* Future Filters */}
                    <Button
                        variant='outline'
                        className='gap-2'
                        type='button'
                    >
                        <SlidersHorizontal size={17} />
                        فیلتر ها
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductsToolbar