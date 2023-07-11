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
import { projects, skills, timeline } from "../utils/Data";
import { GithubIcon, LiveIcon, WorkIcon } from "../utils/Icons";
import { OutlinedChip } from "./ChipComponent";

export const WorkCard = () => {
  return (
    <>
      {timeline.map((item) => (
        <Card className="mt-6 w-96 text-white bg-transparent card">
          <CardBody>
            <WorkIcon />
            <Typography className="font-main font-medium text-job">
              {item.job}
            </Typography>
            <Typography className="font-body font-medium text-company mb-2">
              {item.company} (<span>{item.year}</span>)
            </Typography>
            <Typography className="font-body font-medium text-body2">
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
          <CardBody>
            {item.icon}
            <Typography className="font-main font-medium text-job">
              {item.title}
            </Typography>
            <Typography className="font-body font-medium text-body2">
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
      <div className="snap-y">
        {projects.map((item) => (
          <div class="grid grid-cols-3 gap-4 snap-center">
            <div class="col-span-2 flex flex-col justify-center items-center">
              <Typography className="font-main font-normal text-h2">
                {item.title}
              </Typography>
              <Typography className="font-body font-normal text-body1">
                {item.desc}
              </Typography>
              <div className="flex flex-row justify-center space-x-10">
                {item.tech}
              </div>
              <div className="flex flex-row justify-center space-x-5">
                <a href={item.github}>
                  <GithubIcon />
                </a>
                <a href={item.live}>
                  <LiveIcon />
                </a>
              </div>
            </div>
            <div class="">
              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
