import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Privé — KESSEF ART",
  description: "Service clientèle privé Kessef Art. Demandes d'acquisition et renseignements.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ivory pt-16">
        <ContactClient />
      </main>
      <Footer />
    </>
  );
}
