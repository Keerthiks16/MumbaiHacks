import React from "react";
import HeaderNav from "./Components/HeaderNav";
import Header from "./Components/Header";
import About from "./Components/About";
import Discover from "./Components/Discover";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import "./App.css";
import ServiceNav from "./Components/ServiceNav";
import MultipleOpt from "./Components/MultipleOpt";
import KeyTerms from "./Components/KeyTerms";

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <About />
        <Discover />
        <Services />
        <Footer />
        <ServiceNav />
        <MultipleOpt />
        <KeyTerms />
      </div>
    </>
  );
};

export default App;
