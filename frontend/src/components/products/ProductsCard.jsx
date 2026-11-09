import { addToCart, getCarts } from '@/api/carts';
import { setCart } from '@/store/cartSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner'
const ProductCard = ({ product, productImage, productVariant }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [isAddingToCart, setIsAddingToCart] = useState(false)
    const handleAddToCart = async () => {
        if (!productVariant) {
            toast.error('این محصول در حال حاضر قابل خرید نیست.')
            return
        }
        setIsAddingToCart(true)
        try {
            await addToCart(productVariant.id, 1)
            const cart = await getCarts()
            dispatch(setCart(cart))
            toast.success('محصول با موفقیت به سبد خرید اضافه شد', {
                action: {
                    label: 'برو به سبد خرید',
                    onClick: () => {
                        router.push('/cart')
                    }
                }
            })
        } catch (error) {
            console.error('Failed to add product to cart:', error)
            if (error.response?.data?.message === 'Not enough stock') {
                toast.error('در انبار موجود نیست!')
            } else {
                toast.error('مشکلی در افزودن به سبد خرید رخ داد!')
            }
        } finally {
            setIsAddingToCart(false)
        }
    }
    return (
        <div className='bg-mauve-100 rounded-xl border border-mauve-200 overflow-hidden'>
            <div className='flex flex-col items-center gap-5 pb-5'>
                {productImage ? (
                    <img src={productImage.image_url} alt={product.name} className='w-full h-100 object-cover' />
                ) : (
                    <div>
                        بدون تصویر
                    </div>
                )}
                <div className='flex flex-col items-center gap-4 px-4 w-full'>
                    <h2 className='text-xl font-bold text-center'>{product.name}</h2>
                    {productVariant && (
                        <>
                            <span className='text-lg'>رنگ :
                                <span className={`${productVariant.color === 'طلایی' ? 'bg-yellow-600' : 'bg-gray-500 text-white'} rounded-full px-2 ms-2`}>{productVariant.color}</span></span>
                            <span>قیمت : <span className='fa-num text-mauve-800 font-bold text-2xl mx-1'>{Number(productVariant.price).toLocaleString('fa-IR')}</span></span>
                        </>
                    )}
                    <div className='flex gap-3'>
                        <button
                            type='button'
                            onClick={handleAddToCart}
                            disabled={isAddingToCart}
                            className='bg-mauve-800 text-white px-2 py-1 rounded cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed'>
                            افزودن به سبد خرید
                        </button>
                        <Link href={`/products/${product.slug}`} className='bg-mauve-400 px-2 py-1 rounded'>
                            مشاهده محصول
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard