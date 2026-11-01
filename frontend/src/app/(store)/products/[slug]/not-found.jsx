const { default: Link } = require("next/link")

const ProductNotFound = () => {
    return (
        <main className='container mx-auto min-h-[60vh] flex items-center justify-center'>
            <div className='text-center flex flex-col items-center gap-5'>
                <span className='english-font text-6xl font-bold text-mauve-300'>404</span>
                <h1 className='text-2xl font-bold text-mauve-900'>محصول مورد نظر پیدا نشد</h1>
                <p className='text-mauve-500'>ممکن است محصول حذف شده باشد یا آدرس واردشده اشتباه باشد.</p>
                <Link href={'/products'} className='bg-mauve-800 text-white px-6 py-3 rounded-xl hover:bg-mauve-700 transition'>
                    بازگشت به محصولات
                </Link>
            </div>
        </main>
    )
}
export default ProductNotFound