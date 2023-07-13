import { Typography } from "@material-tailwind/react";
import React from "react";
import { ProjectsCard } from "../components/CardComponent";
import { jobs1, projects } from "../utils/Data";
import { GithubIcon, LiveIcon } from "../utils/Icons";

export const ProjectsPage = () => {
  return (
    <div className="w-full">
      <main
        role="main"
        className="w-full flex flex-col h-screen content-center justify-start"
      >
        <div className="w-full">
          <div className="">
            <div className="sm:flex sm:items-start flex flex-col text-white">
              <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
                <div className="text-white lg:px-[100px] sm:px-[30px] w-full flex flex-row h-screen snap-center snap-always items-center justify-center">
                  <Typography className="font-main font-normal lg:text-h1 sm:text-sm-h1">
                    MY PROJECTS
                  </Typography>
                </div>
                {projects.map((item) => (
                  <div class="grid lg:grid-cols-3 sm:grid-cols-1 h-screen snap-center snap-always lg:px-[100px] sm:px-[50px]">
                    {item.isLeft == false ? (
                      <div class="flex justify-center items-center col-span-1">
                        <img src={item.img} className="" alt="" />
                      </div>
                    ) : null}
                    <div class="lg:col-span-2 sm:col-auto flex flex-col justify-center items-center">
                      <Typography className="font-main font-normal lg:text-h2 sm:text-sm-h2 text-center">
                        {item.title}
                      </Typography>
                      <Typography className="font-body font-normal lg:text-body1 sm:text-sm-body1 text-center">
                        {item.desc}
                      </Typography>
                      <div className="flex flex-row justify-center space-x-5 mt-6">
                        {item.githubIcon == true ? (
                          <a href={item.github}>
                            <GithubIcon />
                          </a>
                        ) : null}
                        <a href={item.live}>
                          <LiveIcon />
                        </a>
                      </div>
                    </div>
                    {item.isLeft == true ? (
                      <div class="flex justify-center items-center col-span-1">
                        <img src={item.img} className="" alt="" />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
