import LoginPageClient from "./LoginPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Aranest",
  description: "Login to your Aranest account",
};

export default function LoginPage() {
  return <LoginPageClient />;
}