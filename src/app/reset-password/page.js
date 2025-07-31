import Footer from "@/components/Home/Footer";
import MainHeader from "@/components/Home/MainHeader";
import RegisterMain from "@/components/Home/RegisterMain";
import ResetPasswordMain from "@/components/Home/ResetPasswordMain";

export const metadata = {
  title: "Reset Password | Cargo Tracking",
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

export default function ResetPassword() {
  return (
    <>
      <MainHeader />
      <ResetPasswordMain />
      <Footer />
    </>
  );
}
