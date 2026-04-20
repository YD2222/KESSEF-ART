import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts, allProducts } from "@/lib/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetailClient from "./ProductDetailClient";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — KESSEF ART`,
    description: product.description,
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.id, 3);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ivory pt-16">
        <ProductDetailClient product={product} related={related} />
      </main>
      <Footer />
    </>
  );
}
