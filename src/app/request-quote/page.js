import Footer from "@/components/Home/Footer";
import MainHeader from "@/components/Home/MainHeader";
import RequestQuoteComponent from "@/components/Home/RequestQuoteComponent";

export const metadata = {
  title: "Request a Quote | Cargo Tracking",
  description: "Get a quick and accurate shipping quote for your cargo. Start your logistics journey with us today.",
  keywords: [
    "get shipping quote",
    "cargo quote",
    "freight estimate",
    "request logistics quote",
    "transportation cost",
    "shipment pricing",
    "quote for delivery"
  ],
};

export default function RequestQuote() {
  return (
    <>
      <MainHeader />
      <RequestQuoteComponent />
      <Footer />
    </>
  );
}
