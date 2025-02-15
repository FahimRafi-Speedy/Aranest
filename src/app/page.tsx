import Header from "../components/Header/Header";
import FindProperty from "../components/Body/FindProperty";
import Footer from "../components/Footer/Footer";
import "./globals.css";
import CardContainer from "../components/Cards/CardContainer";
import Script from "next/script";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="scale-wrapper">
          <Header />
          <FindProperty />
          {/* <Button /> */}
          {/* <SearchButton /> */}

          {/* <Property></Property> */}
        </div>
        <div>
          <CardContainer />
        </div>
      </main>
      <Footer />
    </div>
  );
}
