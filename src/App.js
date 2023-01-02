import React from "react";
import "./App.scss";
import {
  Navbar,
  Header,
  AboutUs,
  SpecialMenu,
  ChefIntro,
  Laurels,
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
    </div>
  );
}

export default App;
