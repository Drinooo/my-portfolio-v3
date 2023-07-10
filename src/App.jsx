import "./App.css";
import { Button, Typography } from "@material-tailwind/react";
import { NavbarComponent } from "./components/NavbarComponent";
import { FooterComponent } from "./components/FooterComponent";
import { HeroSection } from "./sections/HeroSection";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <ParallaxProvider>
        <NavbarComponent />
        <HeroSection />
        <FooterComponent />
      </ParallaxProvider>
    </>
  );
}

export default App;
