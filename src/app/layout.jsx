import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Providers from "../components/Providers";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CourseHub",
  description: "Simple Course Shop built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <Providers>
          <Navbar />
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
          </body>
          
        </Providers>
      </body>
    </html>
  );
}
