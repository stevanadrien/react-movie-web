import React from "react";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Nav from "./component/nav/Nav";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Experience from "./component/experience/Experience";
import Portofolio from "./component/portofolio/Portofolio";
import Services from "./component/myServices/Services";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portofolio />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
