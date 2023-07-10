import "./App.css";
import { Button, Typography } from "@material-tailwind/react";
import { NavbarComponent } from "./components/NavbarComponent";
import { FooterComponent } from "./components/FooterComponent";
import { HeroSection } from "./sections/HeroSection";
import { ParallaxProvider } from "react-scroll-parallax";
import { Lines, Sugar } from "react-preloaders";
import { MainRoutes } from "./MainRoutes";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#FFF",
        }}
        outerStyle={{
          border: "3px solid #FFF",
        }}
      />
      <NavbarComponent />
      <MainRoutes />
      <Sugar background="#151516" color="#FFF" />
    </>
  );
}

export default App;
