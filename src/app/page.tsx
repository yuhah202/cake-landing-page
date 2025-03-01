import HeroBanner from "@/components/HeroBanner";
import Header from "../components/Header";
import Navigation from "@/components/Navigation";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <HeroBanner />
        <Menu />
      </main>
    </>
  );
}
