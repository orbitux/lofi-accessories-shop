/* eslint-disable react-hooks/error-boundaries */
import { getProductBySlug } from "@/api/product";
import ProductsInfo from "@/components/productsDetails/ProductsInfo";
import { notFound } from "next/navigation";

export default async function ProductsSlug({ params }) {
    const { slug } = await params;
    let product
    try {
        product = await getProductBySlug(slug)
    } catch (error) {
        console.error('Failed to fetch product:', error)
        throw error
    }
    if (!product) {
        notFound()
    }
    return (
        <main>
            <ProductsInfo product={product} />
        </main>
    )
}