import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/utils/font";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body className={manrope.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
