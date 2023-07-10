import { StaticImageData } from "next/image";
import gomsLogo from "../../../public/gomsLogo.png";
import codeTechLogo from "../../../public/codeTechLogo.png";

interface Project {
  name: string;
  stacks: { stack: string; color: string }[];
  href: string;
  image: StaticImageData;
}

const projects: Project[] = [
  {
    name: "악보의 정원",
    href: "http://gardenmusic.s3-website.ap-northeast-2.amazonaws.com/",
    image: gomsLogo,
    stacks: [
      { stack: "react", color: "149ECA" },
      { stack: "typescript", color: "3178C6" },
      { stack: "firebase", color: "FFCA28" },
      { stack: "redux", color: "764ABC" },
      { stack: "sass", color: "CC6699" },
    ],
  },
  {
    name: "코드테크",
    href: "https://codetech.nworld.dev/",
    image: codeTechLogo,
    stacks: [
      { stack: "react", color: "149ECA" },
      { stack: "typescript", color: "3178C6" },
      { stack: "zustand", color: "443E38" },
      { stack: "tailwindcss", color: "06B6D4" },
    ],
  },
];

const contentsGoodCode = [
  {
    title: "유연한 코드",
    content: "안녕",
    thumbnail:
      "https://velog.velcdn.com/images/dnr6054/post/21e308c6-106e-46cc-aba0-c01191af3e3f/image.png",
  },
  {},
];

export { projects, contentsGoodCode };
