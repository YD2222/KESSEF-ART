import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CatalogueClient from "./CatalogueClient";

export const metadata = {
  title: "Collection — KESSEF ART",
  description: "Découvrez notre sélection de sculptures et figurines de luxe en éditions limitées.",
};

export default function CataloguePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ivory pt-16">
        <CatalogueClient />
      </main>
      <Footer />
    </>
  );
}
