import React, { Component } from "react";
import Home from "../Home/Home";
import Work from "../Work/Work";
import About from "../About/About";
import Recipes from "../Recipes/Recipes";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default class App extends Component {
  render() {
    return (
      <>
        <Home />
        <Work />
        <About />
        <Recipes />
        <Testimonials />
        <Contact />
        <Footer />
      </>
    );
  }
}
