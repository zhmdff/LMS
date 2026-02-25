import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { RoleProvider } from "@/lib/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "UniManage - Student Directory Management",
  description: "A strict, rule-based academic management platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body className={`${publicSans.variable} antialiased h-screen w-full overflow-hidden bg-[#f6f6f7]`}>
        <RoleProvider>
          <main className="h-full w-full overflow-auto">
            {children}
          </main>
          <ToastContainer position="bottom-right" theme="colored" />
        </RoleProvider>


      </body>
    </html>
  );
}
