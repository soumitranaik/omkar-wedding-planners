import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Lora, Roboto} from "next/font/google";
import { NavbarMain } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // adjust weights as needed
  variable: '--font-playfair',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lora',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Omkar Wedding Planners",
  description: "Best Wedding Planners & Decorators in Goa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <body
        className={`${lora.variable} ${playfair.variable} ${roboto.variable}`}
      >
        <NavbarMain />
        <div className="w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
