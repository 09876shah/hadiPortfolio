import React from "react";
import Hero from "../Hero";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div id="home-page">
      <Header />
      <Hero>
        <div className="w-[65%]"></div>
      </Hero>
      <Footer />
    </div>
  );
};

export default Home;
