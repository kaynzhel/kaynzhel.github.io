import './globals.css';
import { Montserrat } from 'next/font/google';
import Head from "next/head";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

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
        <body className={`${mont.variable} font-mont w-full min-h-screen`}>
            <NavBar />
            {children}
            <Footer />
        </body>
      </html>
  )
}
