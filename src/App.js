import React from 'react';
import './App.scss';
import { Navbar, Header, AboutUs, SpecialMenu } from "./components/import";
function App() {
  return (
    <div className="App">
          <Navbar />
          <Header />
          <AboutUs />
          <SpecialMenu />
    </div>
  );
}

export default App;
