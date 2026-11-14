import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
// StarBackground is preserved intact in ./components/StarBackground.jsx for future reuse
import { PageMotion } from "./components/motion/global/pageMotion";
import { SetInitialTheme } from "./components/SetInitialTheme";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Masum's Portfolio",
  description: "Full-Stack Web Developer portfolio presenting modern, high-performance web products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SetInitialTheme />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base text-primary min-h-screen`}
      >
        <Navbar />
        {/* StarBackground unmounted from layout per portfolio-design standards */}
        <PageMotion>
          <main className="min-h-screen pt-20 pb-10">
            {children}
          </main>
        </PageMotion>
        <Footer />
      </body>
    </html>
  );
}
