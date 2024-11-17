


import { fetchData } from "@/appwrite/data";
import CalltoAction from "@/modules/components/CalltoAction";
import HeroSection from "@/modules/components/HeroSection";
import Introdcution from "@/modules/components/Introdcution";
import JoinOurWaitlist from "@/modules/components/JoinOurWaitlist";
import KeyFeatures from "@/modules/components/KeyFeatures";
import StickyElements from "@/modules/components/layout/StickyElements";
import LetsGo from "@/modules/components/LetsGo";
import WhyChooseHead from "@/modules/components/WhyChooseHead";
import WhyChooseus from "@/modules/components/WhyChooseus";
import { cookies } from "next/headers";






export default async function Home() {
 cookies()
  const data=await fetchData()

  return (
    <>
      <HeroSection heroData={data.HeroContent}/>

      <LetsGo heroCta={data.HeroContent} />

      <Introdcution introData={data.IntroductionData} />

      <WhyChooseHead WhyHead={data.WhyHead} />

      <WhyChooseus whyCards={data.whyCards} />

      <KeyFeatures headData={data.keyfeaturesHeadData} cardData={data.keyfeaturesCardsData} />

      <JoinOurWaitlist waitList={data.WaitListData} />

      <StickyElements linksUrl={data.stickyLinksUrl} />
    </>
  );
}

