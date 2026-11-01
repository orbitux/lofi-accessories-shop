/* eslint-disable react-hooks/error-boundaries */
import { getProductBySlug } from "@/api/product";
import ProductsInfo from "@/components/productsDetails/ProductsInfo";
import { notFound } from "next/navigation";

export default async function ProductsSlug({ params }) {
    const { slug } = await params;

    try {
        const product = await getProductBySlug(slug);

        if (!product) {
            notFound();
        }

        return (
            <main>
                <ProductsInfo product={product} />
            </main>
        );
    } catch (error) {
        console.error(error);
        notFound();
    }
}