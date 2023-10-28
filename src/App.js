import React from "react";
import "./App.css"

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Statics from "./Components/Statics";
import Typingbox from "./Components/Typingbox";


function App() {
  return (
    <div className="App">

      <Header/>
      <Typingbox/>
      <Footer/>
      <Statics/>
      
    </div>
  );
}

export default App;
