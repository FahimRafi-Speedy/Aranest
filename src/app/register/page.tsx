
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Register from "./Register"; // Import the Register component
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Aranest",
  description: "Register to your Aranest account",
};

export default function RegisterPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header at the top */}
            <Header />

            {/* Main content */}
            <div className="flex-grow flex flex-col items-center justify-center">
                {/* Register Form */}
                <div className="flex justify-center items-center w-full mb-20 pr-6 pl-6 rounded">
                    <Register />
                </div>
            </div>

            {/* Footer at the bottom */}
            <Footer />
        </div>
    );
}