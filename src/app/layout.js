import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "./components/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of FSN",
  description: "This is my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet" 
        />
        <link rel='icon' href='/images/logo_website.png'/>
      </head>
      <body className={inter.className}>
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
