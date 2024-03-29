import React from "react";
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { navigation } from "../utils/Data";
import { FilledButton } from "./ButtonComponent";
import { Link } from "react-router-dom";

export const NavbarComponent = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navigation.map((item) => (
        <div className="text-white">
          <Typography className="font-main font-normal text-nav">
            <Link to={item.path}>{item.title}</Link>
          </Typography>
        </div>
      ))}
    </ul>
  );

  return (
    <Navbar className="max-w-full lg:px-[100px] sm:px-[30px] shadow-none border-none rounded-none bg-opacity-100 fixed top-0 backdrop-saturate-0 backdrop-blur-none bg-black">
      <div className="flex items-center justify-between text-black">
        <Typography as="a" href="#" className="cursor-pointer font-medium">
          <img
            src="/images/AVLogoWhite.png"
            className="sm:w-14 lg:w-full"
            alt=""
          />
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden lg:block">
          <FilledButton variant="filled">DOWNLOAD CV</FilledButton>
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <FilledButton variant="filled">DOWNLOAD CV</FilledButton>
        </div>
      </MobileNav>
    </Navbar>
  );
};
