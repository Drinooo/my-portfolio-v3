import { OutlinedChip } from "../components/ChipComponent";
import { EmailIcon, GithubIcon, GmailIcon, GraphicIcon, LinkedinIcon, LocationIcon, PhoneIcon, UIUXIcon, WebDesignIcon, WebIcon } from "./Icons";
import {
  AIIcon,
  BootstrapIcon,
  CSSIcon,
  CanvaIcon,
  FigmaIcon,
  HTMLIcon,
  IonicIcon,
  JavascriptIcon,
  MUIIcon,
  NodeIcon,
  PSDIcon,
  ReactIcon,
  TailwindIcon,
  VSCodeIcon,
  ViteIcon,
  XDIcon,
} from "./TechStackIcons";

export const navigation = [
  {
    title: "HOME",
    path: "/",
  },
  {
    title: "ABOUT",
    path: "/about",
  },
  {
    title: "PROJECTS",
    path: "/projects",
  },
  {
    title: "CONTACT",
    path: "/contact",
  },
];

export const footer = [
  {
    icon: <GithubIcon />,
    src: "https://github.com/Drinooo",
  },
  {
    icon: <LinkedinIcon />,
    src: "https://www.linkedin.com/in/aldrinvillalobos/",
  },
  {
    icon: <GmailIcon />,
    src: "villalobosaldrin18@gmail.com",
  },
];

export const jobs1 = [
  {
    title: "/images/UIUXDesignerFilled.png",
    stroke: false,
  },
  {
    title: "/images/UIUXDesignerStroked.png",
    stroke: true,
  },
];

export const jobs2 = [
  {
    title: "/images/FrontEndFilled.png",
    stroke: false,
  },
  {
    title: "/images/FrontEndStroked.png",
    stroke: true,
  },
];

export const jobs3 = [
  {
    title: "/images/WebDesignerFilled.png",
    stroke: false,
  },
  {
    title: "/images/WebDesignerStroked.png",
    stroke: true,
  },
];
export const icons = [
  {
    icon: <HTMLIcon />,
    tooltip: "HyperText Markup Language",
  },
  {
    icon: <CSSIcon />,
    tooltip: "Cascading Style Sheet",
  },
  {
    icon: <BootstrapIcon />,
    tooltip: "Bootstrap",
  },
  {
    icon: <JavascriptIcon />,
    tooltip: "Javascript",
  },
  {
    icon: <ReactIcon />,
    tooltip: "React JS",
  },
  {
    icon: <MUIIcon />,
    tooltip: "Material UI",
  },
  {
    icon: <NodeIcon />,
    tooltip: "Node JS",
  },
  {
    icon: <IonicIcon />,
    tooltip: "Ionic Framework",
  },
  {
    icon: <TailwindIcon />,
    tooltip: "Tailwind CSS",
  },
  {
    icon: <ViteIcon />,
    tooltip: "Vite",
  },
  {
    icon: <VSCodeIcon />,
    tooltip: "Visual Studio Code",
  },
  {
    icon: <GithubIcon />,
    tooltip: "Github",
  },
  {
    icon: <FigmaIcon />,
    tooltip: "Figma",
  },
  {
    icon: <XDIcon />,
    tooltip: "Adobe XD",
  },
  {
    icon: <PSDIcon />,
    tooltip: "Adobe Photoshop",
  },
  {
    icon: <AIIcon />,
    tooltip: "Adobe Illustrator",
  },
  {
    icon: <CanvaIcon />,
    tooltip: "Canva",
  },
];


export const timeline = [
  {
    job: "Web Designer",
    company: "New Media Services",
    year: "2022 - Present",
    desc: "Web Designer, Front End Developer, UI/UX Designer",
    icon: "",
  },
  {
    job: "Freelance Front End Developer",
    company: "Project Midnight",
    year: "2022",
    desc: "GPS Mobile Application",
    icon: "",
  },
  {
    job: "Freelance Graphic Designer",
    company: "Fiverr.com",
    year: "2020 - 2022",
    desc: "Logo Design, Business Card Design",
    icon: "",
  },
  {
    job: "Data Entry and Quality Assurance",
    company: "Ollopa Corporation",
    year: "2021",
    desc: "Website QA, Data Entry",
    icon: "",
  },
]

export const skills = [
  {
    title: "Web/Mobile Design",
    desc: "Proficient in Figma and Adobe XD for visually appealing and user-friendly website designs, including responsive interfaces for diverse screen sizes and devices.",
    icon: <WebDesignIcon />,
  },
  {
    title: "Graphic Design",
    desc: "Proficient in Adobe Photoshop, Illustrator, and Canva for creating visually stunning graphics, translating client requirements and brand guidelines into compelling visual designs.",
    icon: <GraphicIcon />,
  },
  {
    title: "UI/UX Design",
    desc: "Proficient in Figma and Adobe XD for engaging and user-centric UI/UX designs, including prototyping to communicate design concepts. Stay up-to-date with the latest UI/UX design trends and best practices.",
    icon: <UIUXIcon />,
  },
  {
    title: "Web Development",
    desc: "Proficient in web development languages such as HTML, CSS, and JavaScript. Skilled in building responsive and user-friendly websites that work across different browsers and devices.",
    icon: <WebIcon />,
  },
]

export const clients = [
  {
    client: "NMS Philippines",
  },
  {
    client: "Share My Circle",
  },
  {
    client: "TribeTXT",
  },
  {
    client: "My Allied Health Academy",
  },
  {
    client: "Go Ahead Eagles",
  },
  {
    client: "Her Erotic Story",
  },
  {
    client: "Numa Behaviour Health",
  },
  {
    client: "Montrose Search and Rescue",
  },
  {
    client: "Tiro Chat AI",
  },
]

export const projects = [
  {
    id: "portfoliov2",
    img: "/images/portfoliov2.png",
    title: "Portfolio V2",
    desc: "I skillfully created an awe-inspiring and flawlessly functional masterpiece by meticulously developing my own portfolio design using Figma, React.js, Material UI, GitHub, and the Vercel app.",
    tech: [<OutlinedChip value={"Figma"} />, <OutlinedChip value={"HTML"} />, <OutlinedChip value={"CSS"} />, <OutlinedChip value={"React JS"} />, <OutlinedChip value={"MUI"} />],
    github: "https://github.com/Drinooo/my-portfolio-v2",
    live: "https://aldrinvillalobos.vercel.app/",
    githubIcon: true,
    isLeft: true,
  },
  {
    id: "hypeburger",
    img: "/images/Hypeburger.png",
    title: "Hypeburger",
    desc: "This design skillfully merges Figma, HTML, CSS, React.js, Material-Tailwind, and Tailwind CSS, creating an extraordinary user experience with visually striking elements and interactivity.",
    tech: [<OutlinedChip value={"Figma"} />, <OutlinedChip value={"HTML"} />, <OutlinedChip value={"CSS"} />, <OutlinedChip value={"React JS"} />, <OutlinedChip value={"Tailwind"} />, <OutlinedChip value={"Material-Tailwind"} />,],
    github: "#",
    live: "#",
    githubIcon: true,
    isLeft: false,
  },
  {
    id: "superare",
    img: "/images/Superare.png",
    title: "Superare",
    desc: "This meticulously crafted design in Figma seamlessly combines HTML, CSS, React.js, Material-Tailwind, and Tailwind CSS for front-end development, resulting in a visually stunning and interactive user experience.",
    tech: [<OutlinedChip value={"Figma"} />, <OutlinedChip value={"HTML"} />, <OutlinedChip value={"CSS"} />, <OutlinedChip value={"React JS"} />, <OutlinedChip value={"Tailwind"} />, <OutlinedChip value={"Material-Tailwind"} />,],
    github: "https://github.com/Drinooo/superare-landing-page",
    live: "https://superare-landing-page.vercel.app/",
    githubIcon: true,
    isLeft: true,
  },
  {
    id: "recozy",
    img: "/images/Recozy.png",
    title: "Recozy",
    desc: "This design was artfully crafted in Figma, skillfully merging HTML, CSS, React.js, Material-Tailwind, and Tailwind CSS for front-end development. The harmonious integration of these technologies creates an immersive user experience that captivates with its visual allure and interactivity.",
    tech: [<OutlinedChip value={"Figma"} />, <OutlinedChip value={"HTML"} />, <OutlinedChip value={"CSS"} />, <OutlinedChip value={"React JS"} />, <OutlinedChip value={"Tailwind"} />, <OutlinedChip value={"Material-Tailwind"} />,],
    github: "https://github.com/Drinooo/recozy-landing-page",
    live: "https://recozy-landing-page.vercel.app/",
    githubIcon: true,
    isLeft: false,
  },
  {
    id: "msar",
    img: "/images/MSAR.png",
    title: "Montrose Search and Rescue",
    desc: "This captivating and dynamic digital masterpiece springs from Figma, inspiring the imaginative design process, while WordPress brings it to life, transforming it into a fully functional and visually stunning website.",
    tech: [<OutlinedChip value={"Figma"} />, <OutlinedChip value={"Wordpress"} />,],
    live: "https://montrosesar.org/",
    githubIcon: false,
    isLeft: true,
  },
  {
    id: "numa",
    img: "/images/Numa.png",
    title: "Numa Recovery Center",
    desc: "This meticulously crafted design, brought to life using Figma, seamlessly integrates with WordPress, enabling a seamless transition from design to development. The result is a dynamic and engaging website with unparalleled functionality and visual appeal.",
    tech: [<OutlinedChip value={"Figma"} />, <OutlinedChip value={"Wordpress"} />,],
    live: "https://numarecoverycenters.com/",
    githubIcon: false,
    isLeft: false,
  },
  {
    id: "maha",
    img: "/images/MAHA.png",
    title: "My Allied Health Academy",
    desc: "We meticulously crafted this exceptional UI/UX design using Figma, ensuring a visually stunning and user-centric interface. By leveraging Figma's robust features and collaborative capabilities, we brought our creative vision to life, optimizing usability and engagement for an intuitive and seamless user experience.",
    tech: [<OutlinedChip value={"Figma"} />],
    live: "#",
    githubIcon: false,
    isLeft: true,
  },
  {
    id: "hes",
    img: "/images/HES.png",
    title: "Her Erotic Story",
    desc: "Using Figma, we developed an exceptional UI/UX design with precision and attention to detail. Our visually captivating interface prioritizes the user experience. Leveraging Figma's robust features and collaborative capabilities, we transformed our creative vision into reality, delivering a design that enchants visually and optimizes usability for enhanced user engagement.",
    tech: [<OutlinedChip value={"Figma"} />],
    live: "#",
    githubIcon: false,
    isLeft: false,
  },
  {
    id: "tribetxt",
    img: "/images/tribetxt.png",
    title: "TribeTXT (Rooms)",
    desc: "Using Figma, we crafted an extraordinary UI/UX design with precision and attention to detail. Our visually captivating interface prioritizes user experience. Leveraging Figma's robust features and collaborative capabilities, we transformed our creative vision into reality, delivering a design that mesmerizes visually while enhancing usability and fostering meaningful user engagement.",
    tech: [<OutlinedChip value={"Figma"} />],
    live: "#",
    githubIcon: false,
    isLeft: true,
  },
]

export const contact = [
  {
    icon: <PhoneIcon />,
    title: "PHONE",
    desc: "+639982115529",
  },
  {
    icon: <EmailIcon />,
    title: "EMAIL",
    desc: "villalobosaldrin18@gmail.com",
  },
  {
    icon: <LocationIcon />,
    title: "ADDRESS",
    desc: "Mendigorin Street, San Antonio, Cabangan, Zambales",
  },
]