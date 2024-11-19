import Navbar from "../components/Navbar";
import { Poppins } from "next/font/google";
import "./globals.css";

// Set up Poppins font
const poppins = Poppins({
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Ayaz Portfolio",
  description: "Generate the power of Excellence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${poppins.variable} antialiased` }>
        {/* Wrap Navbar and children inside a div */}
        <div className="layout-container">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
