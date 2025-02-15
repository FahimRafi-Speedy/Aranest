"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";
import { useSearchParams } from "next/navigation";

const LoginPageClient = () => {
  const searchParams = useSearchParams();
  const isForgot = searchParams.get("forgot") !== null;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header at the top */}
      <Header />

      {/* Main content */}
      <div className="flex-grow flex flex-col items-center justify-center">
        {/* Login or Forgot Password Form */}
        <div className="flex justify-center items-center w-full mb-20 pr-6 pl-6 rounded">
          {isForgot ? <ForgetPassword /> : <Login />}
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default LoginPageClient;