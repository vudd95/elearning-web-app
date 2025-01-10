import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/utils/font";
import Sidebar from "@/components/layouts/Sidebar";

export const metadata: Metadata = {
  title: "ELearning Web App",
  description: "ELearning Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
