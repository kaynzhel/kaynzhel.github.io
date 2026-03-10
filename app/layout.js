import './globals.css';
import { Montserrat } from 'next/font/google';
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Script from 'next/script';

const mont = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont",
})

export const metadata = {
  metadataBase: new URL("https://kaynzhel.github.io"),
  author: "Kaye Ena Crayzhel Misay",
  creator: "Kaye Ena Crayzhel Misay",
  description: "Kaye is a Full Stack Software Developer with a strong passion for building user-centered applications. Let's connect!",
  keywords: ["Kaye", "Kaye Misay", "Kaye Ena Crayzhel", "Portfolio Website", "Personal Website", "Developer"],
  title: "Kaye Ena Crayzhel Misay: Personal Website",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Kaye Ena Crayzhel Misay: Personal Website",
    description: "Full Stack Software Developer with a passion for crafting elegant solutions. Practical internship experience in both full-stack and mobile development.",
    url: "/",
    siteName: "Kaye Ena Crayzhel Misay",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Kaye Ena Crayzhel Misay",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaye Ena Crayzhel Misay: Personal Website",
    description: "Full Stack Software Developer with a passion for crafting elegant solutions.",
    images: ["/icon.png"],
  },
  verification: {
    google: "uC9na6ORiEjjLU1XB__p8V-0zEFt6sGZ0D6Ky0NAR3U"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang={"en"}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-JTE6RG65P1" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JTE6RG65P1');
        `}
      </Script>
      <body className={`${mont.variable} font-mont overflow-x-hidden relative`}>
        <div
          className="fixed inset-0 -z-10 min-h-screen w-full"
          style={{
            background: 'linear-gradient(to bottom right, #3A243B, #4E3550, #584458, #665566)',
          }}
          aria-hidden="true"
        />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
