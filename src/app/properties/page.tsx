import type { Metadata } from "next";
import PropertiesPageClient from "./PropertiesPageClient";

export const metadata: Metadata = {
  title: "Properties | Aranest",
  description: "Explore our properties",
};

export default function PropertiesPage() {
  return <PropertiesPageClient />;
}