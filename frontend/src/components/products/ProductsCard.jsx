import Link from 'next/link';
const ProductCard = ({ product, productImage, productVariant }) => {
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
                        <button className='bg-mauve-800 text-white px-2 py-1 rounded cursor-pointer'>
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