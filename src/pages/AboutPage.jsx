import { Tooltip, Typography } from "@material-tailwind/react";
import React from "react";
import { icons } from "../utils/Data";

export const AboutPage = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="about space-y-[60px]">
            <div className="text-white flex flex-col">
              <Typography className="font-main font-medium text-h2">
                ABOUT ME
              </Typography>
              <Typography className="font-body font-normal text-body1">
                I'm a web designer based in the Philippines. I'm passionate
                about crafting visually appealing and user-friendly websites.
                With a strong foundation in design principles, I'm eager to
                bring fresh perspectives to each project I undertake. My goal is
                to create engaging web experiences that seamlessly blend
                aesthetics with functionality. Let's collaborate to bring your
                vision to life and create an impactful online presence.
              </Typography>
            </div>
            <div className="text-white flex flex-col">
              <Typography className="font-main font-medium text-h3">
                TECH STACK
              </Typography>
              <div className="grid sm:grid-cols-5 lg:grid-cols-7 gap-[40px]">
                {icons.map((item) => (
                  <Tooltip
                    content={item.tooltip}
                    placement="top"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 0 },
                    }}
                  >
                    <div>{item.icon}</div>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
          <div className="image">
            
          </div>
        </div>
      </div>
    </>
  );
};
