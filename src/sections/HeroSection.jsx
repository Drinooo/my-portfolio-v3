import { Typography } from "@material-tailwind/react";
import React from "react";
import Marquee from "react-fast-marquee";
import { Parallax } from "react-scroll-parallax";
import { jobs1, jobs2, jobs3 } from "../utils/Data";

export const HeroSection = () => {
  return (
    <>
      {/* <div className="flex flex-col h-full space-y-12">
        <div className="container mx-auto text-white">
          <Typography className="font-main font-normal lg:text-name sm:text-sm-name">
            HI, I'M ALDRIN VILLALOBOS
          </Typography>
        </div>
        <div className="space-y-[40px]">
          <Marquee autoFill direction="left">
            {jobs1.map((item) => (
              <Typography className="mr-[50px]">
                <img
                  src={item.title}
                  className="sm:w-[400px] lg:w-full"
                  alt=""
                />
              </Typography>
            ))}
          </Marquee>
          <Marquee autoFill direction="right">
            {jobs2.map((item) => (
              <Typography className="mr-[50px]">
                <img
                  src={item.title}
                  className="sm:w-[600px] lg:w-full"
                  alt=""
                />
              </Typography>
            ))}
          </Marquee>
          <Marquee autoFill direction="left">
            {jobs3.map((item) => (
              <Typography className="mr-[50px]">
                <img
                  src={item.title}
                  className="sm:w-[400px] lg:w-full"
                  alt=""
                />
              </Typography>
            ))}
          </Marquee>
        </div>
      </div> */}
      <div className="flex flex-col justify-center h-screen space-y-10">
        <div className="container mx-auto text-white">
          <Typography className="font-main font-normal lg:text-name sm:text-sm-name">
            HI, I'M ALDRIN VILLALOBOS
          </Typography>
        </div>
        <div className="space-y-[40px]">
          <Marquee autoFill direction="left">
            {jobs1.map((item) => (
              <Typography className="mr-[50px]">
                <img
                  src={item.title}
                  className="sm:w-[400px] lg:w-full"
                  alt=""
                />
              </Typography>
            ))}
          </Marquee>
          <Marquee autoFill direction="right">
            {jobs2.map((item) => (
              <Typography className="mr-[50px]">
                <img
                  src={item.title}
                  className="sm:w-[600px] lg:w-full"
                  alt=""
                />
              </Typography>
            ))}
          </Marquee>
          <Marquee autoFill direction="left">
            {jobs3.map((item) => (
              <Typography className="mr-[50px]">
                <img
                  src={item.title}
                  className="sm:w-[400px] lg:w-full"
                  alt=""
                />
              </Typography>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};
