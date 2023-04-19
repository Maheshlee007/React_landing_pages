import { Article, Brand, Cta, Feature, Navbar } from "./components";
import {
  Blog,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
  Features,
} from "./container";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
