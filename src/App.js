import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Index";
import { BrowserRouter as Router } from 'react-router-dom'


const App = () => {
  return (
      <Router>
          
      <Navbar />
    </Router>
  );
};

export default App;
