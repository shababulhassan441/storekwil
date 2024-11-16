import CalltoAction from "@/modules/components/CalltoAction";
import HeroSection from "@/modules/components/HeroSection";
import Introdcution from "@/modules/components/Introdcution";
import JoinOurWaitlist from "@/modules/components/JoinOurWaitlist";
import KeyFeatures from "@/modules/components/KeyFeatures";
import StickyElements from "@/modules/components/layout/StickyElements";
import LetsGo from "@/modules/components/LetsGo";
import WaitList from "@/modules/components/WaitList";
import WhyChooseHead from "@/modules/components/WhyChooseHead";
import WhyChooseus from "@/modules/components/WhyChooseus";

export default function Home() {
  return (
    <>
      <HeroSection />

      <LetsGo />

      <Introdcution />

      <WhyChooseHead />
      <WhyChooseus />

      <KeyFeatures />

      {/* <CalltoAction /> */}
      {/* <WaitList /> */}
      <JoinOurWaitlist />

      <StickyElements />
    </>
  );
}
