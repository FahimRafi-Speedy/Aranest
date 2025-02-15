// app/properties/page.tsx
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Details from "./Details";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Details | Aranest",
  description: "See more details about the property",
};

const PropertyDetails = () => {
  return (
    <div>
      <Header />
      <Details />
      <Footer />
    </div>
  );
};

export default PropertyDetails;
