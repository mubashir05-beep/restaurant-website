import React from "react";
import "./App.scss";
import {
  Navbar,
  Header,
  AboutUs,
  SpecialMenu,
  ChefIntro,
  Laurels,
  Gallery,
  FindUs,
  Footer
} from "./components/import";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <ChefIntro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
