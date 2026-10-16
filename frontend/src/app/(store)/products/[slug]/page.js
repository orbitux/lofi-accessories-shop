import ProductsInfo from "@/components/productsDetails/ProductsInfo";

export default async function ProductsSlug({ params }) {
    const { slug } = await params
    return (
        <main>
            <ProductsInfo slug={slug} />
        </main>
    )
}