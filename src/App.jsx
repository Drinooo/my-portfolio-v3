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

      {/* <MainRoutes /> */}

      <div class="grid grid-cols-6 gap-0">
        <div class="col-center-2 col-span-7 text-white">
          <NavbarComponent />
        </div>
        <div class="col-center-2 col-span-7 text-white">
          <MainRoutes />
        </div>
        <div class="col-center-2 col-span-7 text-white">
          <FooterComponent />
        </div>
      </div>
      {/* <Sugar background="#151516" color="#FFF" time={3000} /> */}
    </>
  );
}

export default App;
