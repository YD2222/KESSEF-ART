import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartClient from "./CartClient";

export const metadata = {
  title: "Panier — KESSEF ART",
};

export default function CartPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ivory pt-16">
        <CartClient />
      </main>
      <Footer />
    </>
  );
}
