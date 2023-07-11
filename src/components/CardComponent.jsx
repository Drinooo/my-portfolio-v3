import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  TimelineConnector,
} from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { skills, timeline } from "../utils/Data";
import { WorkIcon } from "../utils/Icons";

export const WorkCard = () => {
  return (
    <>
      {timeline.map((item) => (
        <Card className="mt-6 w-96 text-black">
          <CardBody>
            <WorkIcon />
            <Typography className="font-main font-medium text-job">
              {item.job}
            </Typography>
            <Typography className="font-body font-medium text-company mb-2">
              {item.company} (<span>{item.year}</span>)
            </Typography>
            <Typography className="font-body font-light text-body2">
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
        <Card className="mt-6 w-96 text-black">
          <CardBody>
            {item.icon}
            <Typography className="font-main font-medium text-job">
              {item.title}
            </Typography>
            <Typography className="font-body font-light text-body2">
              {item.desc}
            </Typography>
          </CardBody>
        </Card>
      ))}
    </>
  );
};
