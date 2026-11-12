import Pagination from "@/components/products/ProductsPagination";
import ProductsGrid from "@/components/products/ProductsGrid";
import ProductsHeader from "@/components/products/ProductsHeader";
import ProductsPagination from "@/components/products/ProductsPagination";

export default async function ProductsPage({ searchParams }) {
    const { search = '', page = '1', sort = 'newest', categoryId } = await searchParams
    return (
        <main>
            <ProductsHeader />
            <ProductsGrid search={search} page={Number(page)} initialSort={sort} categoryId={categoryId ? Number(categoryId) : null} />
        </main>
    )
}