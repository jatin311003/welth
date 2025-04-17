import {  Inter } from "next/font/google";
import '../app/globals.css'; // Ensure this is correctly imported

import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter =Inter({subsets:["latin"]});

export const metadata = {
  title: "Welth",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body
        className={`${inter.className}`}
        >
        {/* header */}
        <Header>
          Hello
        </Header>
        <main className="min-h-screen">

        {children}
        </main>
        <Toaster richColors/>
        {/* footer */}
        <footer className="bg-blue-50 py-12">

        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>
            Made by Jyotika
          </p>
        </div>
        </footer>
      </body>
    </html>
        </ClerkProvider>
  );
}
