import React from "react";
import "./App.scss";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./components/Navbar/Navbar";
import { Container } from "semantic-ui-react";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Navbar />
        <Hero />
        <Info />
        {Array.from({ length: 5 }, (_, i) => (
          <Blog index={i} />
        ))}
        <Footer />
      </Container>
    </div>
  );
}

export default App;
