import React from "react";
import "./App.scss";
import { Navbar, Header, AboutUs, SpecialMenu, ChefIntro } from "./components/import";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <ChefIntro />
    </div>
  );
}

export default App;
