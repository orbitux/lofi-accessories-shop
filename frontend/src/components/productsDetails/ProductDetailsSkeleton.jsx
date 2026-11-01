import { Skeleton } from '@/components/ui/skeleton'

const ProductDetailsSkeleton = () => {
    return (
        <div className='container mx-auto grid grid-cols-2 gap-6 my-10 '>

            {/* Product Info */}
            <div className='border border-mauve-200 rounded-2xl p-6 bg-mauve-300'>
                <div className='flex flex-col gap-6 '>

                    <Skeleton className='h-7 w-40 mx-auto' />

                    <Skeleton className='h-8 w-3/4' />

                    <Skeleton className='h-20 w-full' />

                    <Skeleton className='h-10 w-full' />

                    <div className='flex items-center justify-between'>
                        <Skeleton className='h-6 w-24' />
                        <Skeleton className='h-8 w-32' />
                    </div>

                    <Skeleton className='h-10 w-full' />

                    <Skeleton className='h-12 w-full' />

                </div>
            </div>
            {/* Gallery */}
            <div className='flex flex-col gap-4'>
                <Skeleton className='w-full h-120 rounded-2xl bg-mauve-300' />

                <div className='flex gap-3 '>
                    <Skeleton className='w-20 h-20 rounded-lg bg-mauve-300' />
                    <Skeleton className='w-20 h-20 rounded-lg bg-mauve-300' />
                    <Skeleton className='w-20 h-20 rounded-lg bg-mauve-300' />
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsSkeleton