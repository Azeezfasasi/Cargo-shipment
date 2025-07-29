import Footer from "@/components/Home/Footer";
import MainHeader from "@/components/Home/MainHeader";
import TrackShipmentComponent from "@/components/Home/TrackShipmentComponent";

export const metadata = {
  title: "Track Shipment | Cargo Tracking",
  description: "Track your cargo in real-time with our advanced tracking system. Stay updated on your delivery status anytime.",
  keywords: [
    "track cargo",
    "track shipment",
    "real-time cargo tracking",
    "shipping tracker",
    "freight tracking tool",
    "track delivery",
    "shipment status"
  ],
};

export default function TrackShipment() {
  return (
    <>
      <MainHeader />
      <TrackShipmentComponent />
      <Footer />
    </>
  );
}
