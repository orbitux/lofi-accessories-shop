import Pagination from "@/components/products/Pagination";
import ProductCard from "@/components/products/ProductsCard";
import ProductsHeader from "@/components/products/ProductsHeader";

export default function ProductsPage() {
    return (
        <main>
            <ProductsHeader />
            <ProductCard />
            <Pagination />
        </main>
    )
}