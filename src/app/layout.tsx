import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/Footer/Footer";


const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Book Vibe",
  description: "Freshen up your bookshelf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  className={`${playfair.variable} h-full antialiased`} 
>
      <body className="min-h-full flex flex-col font-[family:var(--font-playfair)]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
