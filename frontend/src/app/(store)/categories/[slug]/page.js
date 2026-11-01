import CategoryPageSlugCard from "@/components/categories/slug/CategoryPageSlugCard"

export default async function CategoryPage({ params }) {
    const { slug } = await params
    return (
        <>
            <CategoryPageSlugCard slug={slug} />
        </>
    )
}