import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Chat from "./Chat";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Chat | Aranest",
    description: "Your Trusted Real Estate",
  };

export default function ChatPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow mt-8 mb-8 m-2">
        <Image src="/aranest-cut.png" alt="Aranest Logo" width={200} height={200} className="mb-6" />
        <Chat />
      </div>
      <Footer />
    </div>
  );
}
