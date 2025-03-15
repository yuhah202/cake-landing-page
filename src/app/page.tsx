import HeroBanner from "@/components/HeroBanner";
import Header from "../components/Header";
import Navigation from "@/components/Navigation";
import Menu from "@/components/Menu";
import Events from "@/components/events";
import ReviewSection from "@/components/review";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <HeroBanner />
        <Menu />
        <Events />
        <ReviewSection />
      </main>
      <Footer />
    </>
  );
}
