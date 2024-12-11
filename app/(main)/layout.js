
import { Inter } from 'next/font/google'
import "@/styles/globals.css";
import Header from "@/modules/components/layout/Header";
import Footer from "@/modules/components/layout/Footer";
import ScrollProgress from "@/modules/components/layout/ScrollProgress";
import CustomScripts from "@/modules/scripts/CustomScripts";
import { fetchBanner, fetchheaderFooter } from '@/appwrite/data';
import { cookies } from 'next/headers';
import PopUp from '@/modules/components/PopUp';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Storekwil",
  description:
    "Your Gateway to cutting-edge Innovative Web Solutions ",
};


// export const fetchCache = 'force-no-store';
export default async function RootLayout({ children }) {
  cookies()
  const data = await fetchheaderFooter();
  const banner= await fetchBanner()
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
        <PopUp banner={banner}/>
      </body>
    </html>
  );
}
