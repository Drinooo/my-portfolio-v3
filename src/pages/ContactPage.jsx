import { Typography } from "@material-tailwind/react";
import React from "react";
import { icons, projects } from "../utils/Data";
import { GithubIcon, LiveIcon } from "../utils/Icons";
import { ContactCard } from "../components/CardComponent";
import { OnScrollAnimation } from "../components/OnScrollAnimation";

export const ContactPage = () => {
  return (
    <>
      <div className="max-w-full">
        <main
          role="main"
          className="w-full flex flex-col h-screen content-center justify-center"
        >
          <div className="w-full">
            <div className="">
              <div className="sm:flex sm:items-start">
                <div className="flex-col flex-grow flex text-white">
                  <div className="lg:px-[100px] sm:px-[50px] flex justify-center">
                    <OnScrollAnimation>
                      <Typography className="font-main font-semibold lg:text-h2 sm:text-sm-h2">
                        CONTACT ME
                      </Typography>
                    </OnScrollAnimation>
                  </div>
                  <div className="lg:px-[100px] sm:px-[50px] -z-50">
                    <div className="flex flex-row flex-wrap justify-center gap-x-10">
                      <ContactCard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
