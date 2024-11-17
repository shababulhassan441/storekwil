
import { Inter } from 'next/font/google'
import "@/styles/globals.css";
import Header from "@/modules/components/layout/Header";
import Footer from "@/modules/components/layout/Footer";
import ScrollProgress from "@/modules/components/layout/ScrollProgress";
import CustomScripts from "@/modules/scripts/CustomScripts";
import { fetchheaderFooter } from '@/appwrite/data';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Storekwil",
  description:
    "Your Gateway to cutting-edge Innovative Web Solutions ",
};

export default async function RootLayout({ children }) {
  const data = await fetchheaderFooter();
  return (
    <html lang="en">
      <body
        data-mobile-nav-style="full-screen-menu"
        data-mobile-nav-bg-color=""
        className={`${inter.className} antialiased`}
      >
        <Header headerData={data.headerData} />
        {children}
        <Footer footerData={data.footerData} />
        <ScrollProgress/>
        <CustomScripts/>
      </body>
    </html>
  );
}
