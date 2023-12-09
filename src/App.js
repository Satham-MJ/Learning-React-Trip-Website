import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/service" Component={Service} />
          <Route path="/contact" Component={Contact} />
          <Route path="/sign-up" Component={Signup} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
