import ContactFormSection from "@/components/Home/ContactFormSection";
import ContactHero from "@/components/Home/ContactHero";
import ContactInfo from "@/components/Home/ContactInfo";
import Footer from "@/components/Home/Footer";
import MainHeader from "@/components/Home/MainHeader";

export const metadata = {
  title: "Contact Us | Cargo Tracking",
  description: "Track and manage your cargo shipments worldwide with ease. Reliable logistics solutions tailored to your needs.",
  keywords: [
    "cargo tracking",
    "shipment tracking",
    "freight services",
    "logistics company",
    "track shipment online",
    "international shipping",
    "cargo logistics",
    "shipping company",
    "track package",
    "freight tracking system"
  ],
};

export default function ContactUs() {
  return (
    <>
      <MainHeader />
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <Footer />
    </>
  );
}
