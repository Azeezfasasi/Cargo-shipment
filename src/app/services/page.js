import Footer from "@/components/Home/Footer";
import MainHeader from "@/components/Home/MainHeader";
import OurServicesSection from "@/components/Home/OurServicesSection";

export const metadata = {
  title: "Our Services | Cargo Tracking",
  description: "Explore our full range of logistics services including air freight, sea freight, warehouse management, and last-mile delivery.",
  keywords: [
    "logistics services",
    "air freight",
    "sea freight",
    "cargo delivery",
    "warehouse solutions",
    "supply chain services",
    "transportation management"
  ],
};

export default function OurServices() {
  return (
    <>
      <MainHeader />
      <OurServicesSection />
      <Footer />
    </>
  );
}
