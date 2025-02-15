import type { Metadata } from "next";
import CheckoutPageClient from "./CheckoutPageClient";

export const metadata: Metadata = {
  title: "Checkout | Aranest",
  description: "Your Trusted Real Estate",
};

export default function CheckoutPage() {
  return <CheckoutPageClient />;
}
