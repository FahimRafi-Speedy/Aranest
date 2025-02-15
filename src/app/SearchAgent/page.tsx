import SearchAgent from "./SearchAgents";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Search Agent | Aranest",
    description: "Your Trusted Real Estate",
  };

const SearchAgentPage = () => {
    return (
        <>
            <Header />
            <main className="min-h-[calc(100vh-160px)] flex flex-col">
                <SearchAgent />
            </main>
            <Footer />
        </>
    );
};

export default SearchAgentPage;
