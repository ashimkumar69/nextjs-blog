// react
import React from "react";

// import
import Navbar from "components/frontend/navbar/navbar";
import BgRapper from "components/frontend/bgRapper/bgRapper";
import Footer from "components/frontend/footer/footer";
import HeroBanner from "components/frontend/heroBanner/heroBanner";

function Home() {
  return (
    <BgRapper>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroBanner />
      </main>
      <footer>
        <Footer position="fixed" />
      </footer>
    </BgRapper>
  );
}

export default Home;
