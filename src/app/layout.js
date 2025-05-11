import localFont from "next/font/local";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import "./globals.css";

const anekbangla = localFont({
  src: "../../public/fonts/BalooDa2-VariableFont_wght.ttf",
  variable: "--font-anekbangla",
  display: "swap",
});

export const metadata = {
  title: "Digonto Coaching Center",
  description:
    "Digonto Coaching Center provides top-quality coaching for various competitive exams and academic subjects.",
  icons: {
    icon: {
      url: "/images/digantaLogo.svg",
      type: "image/svg+xml",
    },
    shortcut: { url: "/images/digantaLogo.svg", type: "image/svg+xml" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e7fff6" />
      </head>
      <body className={`${anekbangla.className} bg-cyan-50 text-gray-900`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
