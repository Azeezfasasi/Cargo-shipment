import Footer from "@/components/Home/Footer";
import LoginMain from "@/components/Home/LoginMain";
import MainHeader from "@/components/Home/MainHeader";

export const metadata = {
  title: "Login | Cargo Tracking",
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

export default function Login() {
  return (
    <>
      <MainHeader />
      <LoginMain />
      <Footer />
    </>
  );
}
