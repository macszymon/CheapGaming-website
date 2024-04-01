import { useEffect } from "react";

import Hero from "../../Components/Hero/Hero";
import Banner from "../../Components/Banner/Banner";
import DealsSection from "../../Components/DealsSection/DealsSection";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <Banner />
      <DealsSection />
    </main>
  );
}

export default Home;
