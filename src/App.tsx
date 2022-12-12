import React from "react";
import "./App.css";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
