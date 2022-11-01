import React from "react";

import Navbar from "../layout/Navbar/Navbar";
import Slider from "../layout/Slider/Slider";
import Footer from "../layout/Footer/Footer";
import Main from "../layout/Main/Main";

function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
