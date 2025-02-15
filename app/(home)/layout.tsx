import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import "leaflet/dist/leaflet.css";

export const metadata: Metadata = {
  title: "Sky Metrics",
  description: "nsights in Every Forecast!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={` antialiased`}>
          <Navbar />
          <h1 className="text-5xl text-blue-600">Root Layout</h1>
          <Hero />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
