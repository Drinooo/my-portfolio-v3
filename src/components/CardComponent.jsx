import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  TimelineConnector,
  CardHeader,
} from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { contact, projects, skills, timeline } from "../utils/Data";
import { GithubIcon, LiveIcon, WorkIcon } from "../utils/Icons";
import { OutlinedChip } from "./ChipComponent";

export const WorkCard = () => {
  return (
    <>
      {timeline.map((item) => (
        <Card className="mt-6 w-96 text-white bg-transparent card">
          <CardBody className="flex flex-col items-center">
            <div className="icons mb-6">
              <WorkIcon />
            </div>
            <Typography className="font-main font-medium lg:text-job sm:text-sm-job">
              {item.job}
            </Typography>
            <Typography className="font-body font-medium lg:text-company sm:text-sm-company mb-2">
              {item.company} (<span>{item.year}</span>)
            </Typography>
            <Typography className="font-body font-medium lg:text-body2 sm:text-sm-body2">
              {item.desc}
            </Typography>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export const SkillsCard = () => {
  return (
    <>
      {skills.map((item) => (
        <Card className="mt-6 w-96 text-white bg-transparent card">
          <CardBody className="flex flex-col items-center">
            <div className="icons mb-6">{item.icon}</div>
            <Typography className="font-main font-medium lg:text-job sm:text-sm-job">
              {item.title}
            </Typography>
            <Typography className="font-body font-medium lg:text-body2 sm:text-sm-body2 text-center">
              {item.desc}
            </Typography>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export const ProjectsCard = () => {
  return (
    <>
      <div className="h-screen overflow-y-scroll snap-mandatory snap-y">
        {projects.map((item) => (
          <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-x-10 h-screen snap-center">
            {item.isLeft == false ? (
              <div class="flex justify-center items-center col-span-1">
                <img src={item.img} className="" alt="" />
              </div>
            ) : null}
            <div class="col-span-2 flex flex-col justify-center items-center">
              <Typography className="font-main font-normal lg:text-h2 sm:text-sm-h2">
                {item.title}
              </Typography>
              <Typography className="font-body font-normal lg:text-body1 sm:text-sm-body1 text-center">
                {item.desc}
              </Typography>
              {/* <div className="flex flex-row justify-center space-x-10">
                {item.tech}
              </div> */}
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
    </>
  );
};

export const ContactCard = () => {
  return (
    <>
      {contact.map((item) => (
        <Card className="mt-6 w-96 text-white bg-transparent card">
          <CardBody className="flex flex-col items-center">
            <div className="icons mb-6">{item.icon}</div>
            <Typography className="font-main font-medium lg:text-job sm:text-sm-job">
              {item.title}
            </Typography>
            <Typography className="font-body font-medium lg:text-body2 sm:text-sm-body2">
              {item.desc}
            </Typography>
          </CardBody>
        </Card>
      ))}
    </>
  );
};
