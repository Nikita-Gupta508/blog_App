import Navbar from "../components/ui/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

//import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Post",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-p-20  scroll-smooth">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
             
            disableTransitionOnChange
          >
        <Navbar/>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
