import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { inter } from "@/app/ui/fonts";
import StoreProvider from "@/app/StoreProvider";

export const metadata: Metadata = {
  title: "PayMedia Chat",
  description: "Next-JS, React Interview Assignment. Associate SoftwareEngineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
