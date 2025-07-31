import Footer from "@/components/Home/Footer";
import MainHeader from "@/components/Home/MainHeader";
import RegisterMain from "@/components/Home/RegisterMain";

export const metadata = {
  title: "Register | Cargo Tracking",
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

export default function Register() {
  return (
    <>
      <MainHeader />
      <RegisterMain />
      <Footer />
    </>
  );
}
