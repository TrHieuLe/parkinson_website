import { AR_One_Sans, Afacad_Flux, Advent_Pro } from "next/font/google"
import BodyLayout from "./bodyLayout";
import Footer from "./footer";
import "./globals.css";


const arOneSans = AR_One_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

const afacadFlux = Afacad_Flux({
  weight: '500',
  subsets: ['latin'],
  display: 'swap'
})

const adventPro = Advent_Pro({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    </head>
    <body className={ afacadFlux.className }>
      <BodyLayout />
      {children}
      <Footer />
    </body>
    </html>
  );
}
