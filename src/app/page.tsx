import HeroBanner from "@/components/HeroBanner";
import Header from "../components/Header";
import Navigation from "@/components/Navigation";
import IntroduceSection from "@/components/IntroduceSection";
import Events from "@/components/events";
import ReviewSection from "@/components/review";
import Footer from "@/components/Footer";
import ActivitiesSection from "@/components/activities";

export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <HeroBanner />
        <IntroduceSection />
        <ActivitiesSection />
        <Events />
        <ReviewSection />
      </main>
      <Footer />
    </>
  );
}
