import localFont from "next/font/local";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import "./globals.css";

const quicksand = localFont({
  src: "../../public/fonts/Quicksand-Regular.ttf",
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata = {
  title: "Digonto Coaching Center - Quality Education for All",
  description:
    "Digonto Coaching Center provides top-quality coaching for various competitive exams and academic subjects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/DigantaLogo.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e7fff6" />
      </head>
      <body className={`${quicksand.className} bg-cyan-50 text-gray-900`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
