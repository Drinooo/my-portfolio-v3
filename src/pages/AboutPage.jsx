import { Tooltip, Typography } from "@material-tailwind/react";
import React from "react";
import { clients, icons } from "../utils/Data";
import { SkillsCard, WorkCard } from "../components/CardComponent";
import Marquee from "react-fast-marquee";

export const AboutPage = () => {
  return (
    <div class="max-w-full">
      <main
        role="main"
        class="w-full flex flex-col content-center justify-center"
      >
        <div class="w-full">
          <div class="sm:flex sm:items-start">
            <div className="flex-col flex-grow flex text-white space-y-[60px] overflow-y-auto h-[700px]">
              <div className="lg:px-[100px] sm:px-[50px]">
                <Typography className="font-main font-semibold lg:text-h2 sm:text-sm-h2">
                  ABOUT ME
                </Typography>
                <Typography className="font-body font-normal lg:text-body1 sm:text-sm-body1">
                  I'm a web designer based in the Philippines. I'm passionate
                  about crafting visually appealing and user-friendly websites.
                  With a strong foundation in design principles, I'm eager to
                  bring fresh perspectives to each project I undertake. My goal
                  is to create engaging web experiences that seamlessly blend
                  aesthetics with functionality. Let's collaborate to bring your
                  vision to life and create an impactful online presence.
                </Typography>
              </div>
              <div className="lg:px-[100px] sm:px-[50px]">
                <Typography className="font-main font-semibold lg:text-h3 sm:text-sm-h3">
                  TECH STACK
                </Typography>
                <div class="grid lg:grid-cols-7 sm:grid-cols-4 gap-[40px]">
                  {icons.map((item) => (
                    <div>{item.icon}</div>
                  ))}
                </div>
              </div>
              <div className="lg:px-[100px] sm:px-[50px]">
                <Typography className="font-main font-semibold lg:text-h3 sm:text-sm-h3">
                  WORK EXPERIENCE
                </Typography>
                <div className="flex flex-row flex-wrap justify-between">
                  <WorkCard />
                </div>
              </div>
              <div className="lg:px-[100px] sm:px-[50px]">
                <Typography className="font-main font-semibold lg:text-h3 sm:text-sm-h3">
                  MAIN SKILLS
                </Typography>
                <div className="flex flex-row flex-wrap justify-between">
                  <SkillsCard />
                </div>
              </div>
              <div className="lg:px-[100px] sm:px-[50px]">
                <Typography className="font-main font-semibold lg:text-h3 sm:text-sm-h3">
                  CLIENTS I'VE WORKED WITH
                </Typography>
                <div className="flex flex-row flex-wrap justify-between">
                  <Marquee autoFill>
                    {clients.map((item) => (
                      <Typography className="font-main font-normal lg:text-h4 sm:text-sm-h4 mr-[40px]">
                        {item.client}
                      </Typography>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
