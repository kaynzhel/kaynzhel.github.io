import './globals.css';
import { Montserrat } from 'next/font/google';
import Head from "next/head";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const mont = Montserrat({
    subsets: ['latin'],
    variable: "--font-mont",
})

export const metadata = {
    title: "Kaye's Portfolio",
    description: "My name is Kaye Ena Crayzhel Misay. Committed to life-long learning, I am interested in fullstack and mobile development.",
}

export default function RootLayout({ children }) {
  return (
      <html lang={"en"}>
          <Head>
              <meta name={"viewport"} content={"width=device-width, initial-scale=1"} />
              <link rel={"icon"} href={"/favicon.ico"} />
          </Head>
        <body className={`${mont.variable} font-mont w-full min-h-screen`}>
            <NavBar />
            {children}
            <Footer />
        </body>
      </html>
  )
}
