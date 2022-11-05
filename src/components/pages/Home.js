import React from "react";

import Navbar from "../layout/Navbar/Navbar";
import Slider from "../layout/Slider/Slider";
import Footer from "../layout/Footer/Footer";
import Main from "../layout/Main/Main";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <Slider />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
