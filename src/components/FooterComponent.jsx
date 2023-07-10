import React from "react";
import { Typography } from "@material-tailwind/react";
import { footer } from "../utils/Data";

export const FooterComponent = () => {
  return (
    <div className="absolute inset-x-0 bottom-0">
      <footer className="flex w-full flex-col flex-wrap items-center justify-center gap-y-6 gap-x-12 py-6 text-center md:justify-between text-white">
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          {footer.map((item) => (
            <li>
              <a href={item.src}>
                <Typography>{item.icon}</Typography>
              </a>
            </li>
          ))}
        </ul>
        <Typography
          color="blue-gray"
          className="font-body font-normal text-footer"
        >
          © 2023. All Rights Reserved. Aldrin Villalobos
        </Typography>
      </footer>
    </div>
  );
};
