import React from "react";
import productos from "./data/productos";
import Header from "./components/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes/Routes";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes productItems={productos} />
      </Router>
    </div>
  );
};

export default App;
