import { Typography } from "@material-tailwind/react";
import React from "react";
import { ProjectsCard } from "../components/CardComponent";

export const ProjectsPage = () => {
  return (
    <div class="max-w-full">
      <main
        role="main"
        class="w-full flex flex-col content-center justify-center"
      >
        <div class="w-full">
          <div class="sm:flex sm:items-start">
            <div className="flex-col flex-grow flex text-white space-y-[60px] overflow-y-auto h-[700px]">
              <div className="lg:px-[100px] sm:px-[50px] text-center">
                <Typography className="font-main font-semibold text-h2">
                  MY PROJECTS
                </Typography>
              </div>
              <div className="lg:px-[100px] sm:px-[50px]">
                <ProjectsCard />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
