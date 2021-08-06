// react
import React from "react";

// next
import Head from "next/head";

// import
import Navbar from "components/frontend/navbar/navbar";
import BgRapper from "components/frontend/bgRapper/bgRapper";
import Footer from "components/frontend/footer/footer";
import MainContent from "components/frontend/mainContent/mainContent";
import Faqs from "components/frontend/common/page";

function FaqsPage() {
  return (
    <React.Fragment>
      <Head>
        <title>FAQs</title>
      </Head>
      <BgRapper>
        <header>
          <Navbar />
        </header>
        <main>
          <MainContent>
            <Faqs title="FAQs" />
          </MainContent>
        </main>
        <footer>
          <Footer />
        </footer>
      </BgRapper>
    </React.Fragment>
  );
}

export default FaqsPage;
