import AboutTheCompany from "@/components/Home/AboutTheCompany";
import CallToAction from "@/components/Home/CallToAction";
import MainHeader from "@/components/Home/MainHeader";
import MeetOurTeam from "@/components/Home/MeetOurTeam";
import WhoWeAre from "@/components/Home/WhoWeAre";
import HowItWorks from "@/components/Home/HowItWorks";
import Footer from "@/components/Home/Footer";

export const metadata = {
  title: "About Us | Cargo Tracking",
  description: "Learn more about our cargo company, our mission, and the logistics solutions we provide to clients worldwide.",
  keywords: [
    "about cargo company",
    "freight services background",
    "logistics experts",
    "shipping company mission",
    "who we are",
    "cargo company profile",
    "trusted logistics provider"
  ],
};

export default function AboutUs() {
  return (
    <>
      <MainHeader />
      <AboutTheCompany />
      <MeetOurTeam />
      <CallToAction />
      <WhoWeAre />
      <HowItWorks />
      <Footer />
    </>
  );
}
