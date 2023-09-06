// main page 에 디스플레이에 필요한 컨텐츠들의 frontmatter 임.
// 현재는 프로젝트 회고만을 담고있지만, Recent writings and good code I defined 도 작성할 예정
import gomsLogo from "../../public/gomsLogo.png";
import codeTechLogo from "../../public/codeTechLogo.png";

export const contentsForMainPage = [
  {
    projects: [
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
    ],
    projectsRecall: [
      {
        title: "CodeTech 기획 회고",
        publishedAt: "2022-12-09",
        description: "코드테크 프로젝트의 기획 회고입니다.",
        thumbnailUrl:
          "https://velog.velcdn.com/images/ethan_world/post/67fb17d4-1d79-4b7b-b1df-4aff27929bfb/image.ico",
        tags: ["Codetech", "코드스테이츠"],
        slug: "코드테크 기획 회고",
      },
      {
        title: "CodeTech 개발 회고",
        publishedAt: "2022-12-10",
        description: "코드테크 프로젝트의 개발 회고입니다.",
        thumbnailUrl:
          "https://velog.velcdn.com/images/ethan_world/post/67fb17d4-1d79-4b7b-b1df-4aff27929bfb/image.ico",
        tags: ["Codetech", " 코드스테이츠"],
        slug: "코드테크 개발 회고",
      },
      {
        title: "악보의 정원 회고 - 1",
        publishedAt: "2023-03-13",
        description: "악보의 정원 프로젝트의 개발 회고입니다.",
        thumbnailUrl:
          "https://velog.velcdn.com/images/ethan_world/post/f2c4b97e-d014-43c2-94b6-8a2e91c8b388/image.ico",
        tags: ["악보의 정원"],
        slug: "악보의 정원 회고-1",
      },
      {
        title: "악보의 정원 회고 - 2",
        publishedAt: "2023-03-20",
        description: "악보의 정원 프로젝트의 개발 회고입니다.",
        thumbnailUrl:
          "https://velog.velcdn.com/images/ethan_world/post/f2c4b97e-d014-43c2-94b6-8a2e91c8b388/image.ico",
        tags: ["악보의 정원"],
        slug: "악보의 정원 회고-2",
      },
    ],
    contentsGoodCode: [
      {
        title: "웹 개발 작업 프로세스 정리",
        publishedAt: "2023-09-05",
        description: "웹 개발 작업 프로세스 정리글 입니다",
        thumbnailUrl:
          "https://velog.velcdn.com/images/wansook0316/post/88c6a6da-3a22-45cd-8705-7ff1e66feb8f/image.png",
        slug: "웹 개발 작업 프로세스 정리",
      },
      {
        title: "웹 개발 작업 프로세스 정리",
        publishedAt: "2023-09-05",
        description: "웹 개발 작업 프로세스 정리글 입니다",
        thumbnailUrl:
          "https://velog.velcdn.com/images/wansook0316/post/88c6a6da-3a22-45cd-8705-7ff1e66feb8f/image.png",
        slug: "웹 개발 작업 프로세스 정리",
      },
    ],
  },
];
