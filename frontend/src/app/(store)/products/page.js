import Pagination from "@/components/products/ProductsPagination";
import ProductsGrid from "@/components/products/ProductsGrid";
import ProductsHeader from "@/components/products/ProductsHeader";
import ProductsPagination from "@/components/products/ProductsPagination";

export default async function ProductsPage({ searchParams }) {
    const { search = '', page = '1' } = await searchParams
    return (
        <main>
            <ProductsHeader />
            <ProductsGrid search={search} page={Number(page)} />
        </main>
    )
}

// <ProductsPagination currentPage={Number(page)} />
