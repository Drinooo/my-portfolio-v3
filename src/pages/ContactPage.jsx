import { Typography } from "@material-tailwind/react";
import React from "react";
import { icons, projects } from "../utils/Data";
import { GithubIcon, LiveIcon } from "../utils/Icons";
import { ContactCard } from "../components/CardComponent";
import { OnScrollAnimation } from "../components/OnScrollAnimation";

export const ContactPage = () => {
  return (
    <>
      <div className="w-full">
        <main
          role="main"
          className="w-full flex flex-col h-screen content-center justify-center"
        >
          <div className="w-full">
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start flex flex-col  lg:px-[100px] sm:px-[30px]">
                <div className="text-white">
                  <Typography className="font-main font-normal lg:text-h2 sm:text-sm-h2">
                    CONTACT ME
                  </Typography>
                </div>
                <div className="flex flex-wrap lg:space-x-10 justify-center">
                  <ContactCard />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
