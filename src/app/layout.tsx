import type { Metadata } from "next";
import "./globals.css";

import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Kailasa Woods | Luxury Farm Stay in Mussoorie",
  description: "A farm to table luxury Farm Stay in the Foothills of Mussoorie. Experience slow living, earthy luxury, and boutique hospitality.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="bg-kw-offwhite text-kw-forest min-h-screen flex flex-col font-sans selection:bg-kw-sage selection:text-kw-offwhite md:cursor-none relative">
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}