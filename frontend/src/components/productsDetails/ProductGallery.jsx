import { getProductImages } from '@/api/product'
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const ProductGallery = ({ product }) => {
    const [images, setImages] = useState([])
    const [selectedImage, setSelectedImage] = useState(0)
    useEffect(() => {
        const getImages = async () => {
            try {
                const res = await getProductImages()
                const productImages = res.filter(image => image.product_id === product?.id).sort((a, b) => a.sort_order - b.sort_order)
                setImages(productImages)
            } catch (error) {
                console.error('Failed to fetch product images:', error)
            }
        }
        if (product?.id) {
            getImages()
        }
    }, [product?.id])
    if (!product || images.length === 0) {
        return (
            <div className='flex items-center justify-center h-full min-h-100 rounded-xl bg-mauve-100'>
                <span className='text-mauve-500'>
                    تصویری برای این محصول وجود نداره
                </span>
            </div>
        )
    }
    const nextImage = () => {
        setSelectedImage(prev => prev === images.length - 1 ? 0 : prev + 1)
    }
    const previousImage = () => {
        setSelectedImage(prev => prev === 0 ? images.length - 1 : prev - 1)
    }
    return (
        <div className='flex flex-col gap-4'>
            {/* Main image */}
            <div className='relative overflow-hidden rounded-2xl border border-mauve-200 bg-mauve-50'>
                <img src={images[selectedImage].image_url} alt={images[selectedImage].alt_text || product.name} className='w-full h-120 object-cover' />
                {images.length > 1 && (
                    <>
                        <button onClick={previousImage} aria-label='تصویر قبلی' className='absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-mauve-800 flex items-center justify-center shadow-md hover:bg-white transition'>
                            <FaArrowRight size={14} />
                        </button>
                        <button onClick={nextImage} aria-label='تصویر بعدی' className='absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-mauve-800 flex items-center justify-center shadow-md hover:bg-white transition'>
                            <FaArrowLeft size={14} />
                        </button>
                    </>
                )}
            </div>
            {/* Thumbnail */}
            {images.length > 1 && (
                <div className='flex gap-3 overflow-x-auto'>
                    {images.map((image, index) => (
                        <button type='button' key={image.id} onClick={() => setSelectedImage(index)}
                            className={`shrink-0 overflow-hidden rounded-lg border-2 transition
                                ${selectedImage === index ? 'border-mauve-700' : 'border-mauve-200'}
                                `}
                        >
                            <img src={image.image_url} alt={image.alt_text || product.name} className='w-20 h-20 object-cover' />
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProductGallery