import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PT Bahtera Anugrah Indonesia - Advertising Agency & Creative Services",
  description: "Perusahaan yang bergerak di bidang jasa periklanan dan layanan kreatif yang berfokus pada membangun brand yang kuat, modern, dan relevan di era digital.",
  keywords: ["PT Bahtera Anugrah Indonesia", "Advertising Agency", "Jasa Periklanan", "Digital Marketing", "Branding", "Creative Services", "Surabaya"],
  authors: [{ name: "PT Bahtera Anugrah Indonesia" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "PT Bahtera Anugrah Indonesia - Advertising Agency & Creative Services",
    description: "Perusahaan yang bergerak di bidang jasa periklanan dan layanan kreatif yang berfokus pada membangun brand yang kuat, modern, dan relevan di era digital.",
    url: "https://bahtera-anugrah-indonesia.com",
    siteName: "PT Bahtera Anugrah Indonesia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Bahtera Anugrah Indonesia - Advertising Agency & Creative Services",
    description: "Perusahaan yang bergerak di bidang jasa periklanan dan layanan kreatif yang berfokus pada membangun brand yang kuat, modern, dan relevan di era digital.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-poppins antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
