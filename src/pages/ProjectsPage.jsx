import { Typography } from "@material-tailwind/react";
import React from "react";
import { ProjectsCard } from "../components/CardComponent";
import { jobs1, projects } from "../utils/Data";
import { GithubIcon, LiveIcon } from "../utils/Icons";

export const ProjectsPage = () => {
  return (
    // <div class="max-w-full">
    //   <main
    //     role="main"
    //     class="w-full flex flex-col content-center justify-center"
    //   >
    //     <div class="w-ful">
    //       <div class="sm:flex sm:items-start">
    //         <div className="flex-col flex-grow flex text-white">
    //           <div className="lg:px-[100px] sm:px-[50px] text-center h-screen overflow-y-scroll snap-y">
    //             <div className="snap-center h-screen flex items-center justify-center">
    //               <Typography className="font-main font-semibold lg:text-h2 sm:text-sm-h2 flex ">
    //                 MY PROJECTS
    //               </Typography>
    //             </div>
    //             {projects.map((item) => (
    //               <div class="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 flex h-screen items-center snap-center">
    //                   {item.isLeft == false ? (
    //                     <img src={item.img} className="" alt="" />
    //                   ) : null}
    //                 <div class="">
    //                   <Typography className="font-main font-normal lg:text-h2 sm:text-sm-h2">
    //                     {item.title}
    //                   </Typography>
    //                   <Typography className="font-body font-normal lg:text-body1 sm:text-sm-body1 text-center">
    //                     {item.desc}
    //                   </Typography>
    //                   <div className="flex flex-row justify-center space-x-6">
    //                     {item.githubIcon == true ? (
    //                       <a href={item.github}>
    //                         <GithubIcon />
    //                       </a>
    //                     ) : null}
    //                     <a href={item.live}>
    //                       <LiveIcon />
    //                     </a>
    //                   </div>
    //                 </div>
    //                   {item.isLeft == true ? (
    //                     <img src={item.img} className="" alt="" />
    //                   ) : null}
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </main>
    // </div>
    <div className="w-full">
      <main
        role="main"
        className="w-full flex flex-col h-screen content-center justify-start"
      >
        <div className="w-full">
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start flex flex-col text-white">
              <div className="h-screen overflow-y-scroll snap-y">
                <div className="text-white lg:px-[100px] sm:px-[30px] w-full flex flex-row h-screen snap-center items-center justify-center">
                  <Typography className="font-main font-normal lg:text-h1 sm:text-sm-h1">
                    MY PROJECTS
                  </Typography>
                </div>
                {projects.map((item) => (
                  <div class="grid lg:grid-cols-3 sm:grid-cols-1 h-screen snap-center lg:px-[100px] sm:px-[50px] sm:pb-40 lg:pb-0">
                    {item.isLeft == false ? (
                      <div class="flex justify-center items-center col-span-1">
                        <img src={item.img} className="" alt="" />
                      </div>
                    ) : null}
                    <div class="col-span-2 flex flex-col justify-center items-center">
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
