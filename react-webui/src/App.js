import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./navigation/RouterConfig";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <RouterConfig></RouterConfig>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
};

export default App;
