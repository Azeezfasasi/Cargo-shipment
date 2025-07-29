import CallToAction from "@/components/Home/CallToAction";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import MainHeader from "@/components/Home/MainHeader";
import OurServicesSection from "@/components/Home/OurServicesSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import WhoWeAre from "@/components/Home/WhoWeAre";

export const metadata = {
  title: "Home | Cargo Tracking",
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

export default function Home() {
  return (
    <>
    <MainHeader />
    <Hero />
    <OurServicesSection />
    <CallToAction />
    <WhoWeAre />
    <HowItWorks />
    <TestimonialSection />
    <Footer />
    </>
  );
}
