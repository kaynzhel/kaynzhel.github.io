import './globals.css';
import { Montserrat } from 'next/font/google';
import Head from "next/head";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Script from 'next/script';


const mont = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont",
})

export const metadata  = {
  author: "Kaye Ena Crayzhel Misay",
  creator: "Kaye Ena Crayzhel Misay",
  description: "Full Stack Software Developer with a passion for crafting elegant solutions. Practical internship experience in both full-stack and mobile development, complemented by strong customer service and tutoring background. Effective communicator skilled at conveying complex ideas concisely, fostering seamless team collaboration. Let's connect!",
  keywords: ["Kaye", "Kaye Misay", "Kaye Ena Crayzhel", "Kaye Ena Crayzhel", "Portfolio Website", "Personal Website", "Developer"],
  title: "Kaye Ena Crayzhel Misay: Personal Website",
  verification: {
    google: "uC9na6ORiEjjLU1XB__p8V-0zEFt6sGZ0D6Ky0NAR3U"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang={"en"}>
      <Head>
        <link
        rel="icon"
        href="/icon.png"
        type="image/png"
        sizes="png"
        />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-JTE6RG65P1" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JTE6RG65P1');
        `}
      </Script>
      <body className={`${mont.variable} font-mont overflow-x: hidden;`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
