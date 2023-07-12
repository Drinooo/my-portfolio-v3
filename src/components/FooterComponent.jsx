import React from "react";
import { Typography } from "@material-tailwind/react";
import { footer } from "../utils/Data";

export const FooterComponent = () => {
  return (
      <footer className="bg-black flex w-full flex-col flex-wrap items-center justify-center gap-y-6 gap-x-12 py-4 text-center md:justify-between text-white fixed bottom-0">
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          {footer.map((item) => (
            <li>
              <a href={item.src}>
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
        <Typography
          className="font-body font-normal lg:text-footer sm:text-sm-footer"
        >
          © 2023. All Rights Reserved. Aldrin Villalobos
        </Typography>
      </footer>
  );
};