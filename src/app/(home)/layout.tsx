import type { Metadata } from "next";
import { Public_Sans } from 'next/font/google';
import Footer from "@/components/Footer";
import Header from '../../components/Header';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const publicSans = Public_Sans({
  subsets: ['latin'], // Add more if needed (e.g., 'latin-ext')
  weight: ['700'], // Only load bold (add more like ['400', '700'] if needed)
  variable: '--font-public-sans', // Optional: for CSS variables (useful with Tailwind)
  display: 'swap', // Prevents invisible text while loading
});

export const metadata: Metadata = {
  title: "Investment Management",
  description: "Developed by Fuad Hossain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${publicSans.variable} antialiased min-h-screen flex flex-col justify-between `}
      >
        <Header />
        <section className="flex-1 px-[20%] space-y-12">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
