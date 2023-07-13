import { Tooltip, Typography } from "@material-tailwind/react";
import React from "react";
import { clients, icons, jobs1, jobs2, jobs3 } from "../utils/Data";
import { SkillsCard, WorkCard } from "../components/CardComponent";
import Marquee from "react-fast-marquee";

export const AboutPage = () => {
  return (
    <div className="max-w-full">
      <main
        role="main"
        className="w-full flex flex-col content-center justify-center"
      >
        <div className="w-full">
          <div className="sm:flex sm:items-start">
            <div className="flex-col flex-grow flex text-white space-y-[100px] overflow-y-auto h-screen">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-40">
                <div className="space-y-[100px]">
                  <div className="lg:px-[100px] sm:px-[50px]">
                    <Typography className="font-main font-semibold lg:text-h2 sm:text-sm-h2">
                      ABOUT ME
                    </Typography>
                    <Typography className="font-body font-normal lg:text-body1 sm:text-sm-body1">
                      Hi! I am Aldrin Villalobos. I'm a web designer based in the Philippines. I'm
                      passionate about crafting visually appealing and
                      user-friendly websites. With a strong foundation in design
                      principles, I'm eager to bring fresh perspectives to each
                      project I undertake. My goal is to create engaging web
                      experiences that seamlessly blend aesthetics with
                      functionality. Let's collaborate to bring your vision to
                      life and create an impactful online presence.
                    </Typography>
                  </div>
                  <div className="lg:px-[100px] sm:px-[50px]">
                    <Typography className="font-main font-semibold lg:text-h3 sm:text-sm-h3">
                      TECH STACK
                    </Typography>
                    <div className="grid lg:grid-cols-7 sm:grid-cols-4 gap-[40px]">
                      {icons.map((item) => (
                        <div>{item.icon}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:pr-[100px] sm:pr-[50px] flex items-center justify-center">
                  <img src="/images/AboutImg.png" className="max-w-full h-full" alt="" />
                </div>
              </div>

              <div className="lg:px-[100px] sm:px-[50px] -z-50">
                <Typography className="font-main font-semibold lg:text-h3 sm:text-sm-h3">
                  WORK EXPERIENCE
                </Typography>
                <div className="flex flex-row flex-wrap justify-between">
                  <WorkCard />
                </div>
              </div>
              <div className="lg:px-[100px] sm:px-[50px]">
                <Typography className="font-main font-semibold lg:text-h3 sm:text-sm-h3">
                  CLIENTS I'VE WORKED WITH
                </Typography>
                <div className="flex flex-row flex-wrap justify-between">
                  <Marquee autoFill className="-z-50">
                    {clients.map((item) => (
                      <Typography className="font-main font-normal lg:text-h4 sm:text-sm-h4 mr-[40px]">
                        {item.client}
                      </Typography>
                    ))}
                  </Marquee>
                </div>
              </div>
              <div className="lg:px-[100px] sm:px-[50px] -z-50">
                <Typography className="font-main font-semibold lg:text-h3 sm:text-sm-h3">
                  MAIN SKILLS
                </Typography>
                <div className="flex flex-row flex-wrap justify-between mb-40">
                  <SkillsCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
