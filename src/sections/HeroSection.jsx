import { Typography } from "@material-tailwind/react";
import React from "react";
import Marquee from "react-fast-marquee";
import { Parallax } from "react-scroll-parallax";
import { jobs1, jobs2, jobs3 } from "../utils/Data";

export const HeroSection = () => {
  return (
    <>
      <div className="w-full">
        <main
          role="main"
          className="w-full flex flex-col h-screen content-center justify-center"
        >
          <div className="w-full">
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start flex flex-col">
                <div className="text-white lg:px-[100px] sm:px-[30px]">
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
                          className="sm:w-[450px] lg:w-full"
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
                          className="sm:w-[650px] lg:w-full"
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
                          className="sm:w-[450px] lg:w-full"
                          alt=""
                        />
                      </Typography>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
