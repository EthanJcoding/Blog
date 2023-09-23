// main page 에 디스플레이에 필요한 컨텐츠들의 frontmatter 임.
// 현재는 프로젝트 회고만을 담고있지만, Recent writings and good code I defined 도 작성할 예정
export const contentsForMainPage = [
  {
    projects: [
      {
        name: "코드테크",
        href: "https://codetech.nworld.dev/",
        image:
          "https://velog.velcdn.com/images/ethan_world/post/03646744-5eb1-46a1-851b-13ad2dac19c7/image.gif",
        scope: [
          "팀장",
          "메인페이지, 검색 결과페이지, 컴포넌트 제작 및 디자인",
          "리뷰 페이지 컴포넌트 제작, 리뷰 수정 및 컨텐츠 댓글 api 연결",
          "다크모드",
        ],
        spec: [
          "Library: React",
          "State Management: Zustand",
          "Style: Tailwindcss",
        ],
        description: "IT 관련 기기 별점 리뷰 커뮤니티",
      },
      {
        name: "악보의 정원",
        href: "http://gardenmusic.s3-website.ap-northeast-2.amazonaws.com/",
        image:
          "https://velog.velcdn.com/images/ethan_world/post/69a47aca-5433-492d-a8f1-990f10a5ec06/image.gif",
        scope: [
          "Storybook을 사용하여 CDD 기반 개발 및 아토믹 디자인 패턴을 사용하여 재사용성 높은 컴포넌트 제작",
          "Storybook CI를 위해서 chromatic을 깃헙 action에 추가하여 컴포넌트 테스트 자동화 구현",
          "Firebase 데이터베이스 및 authentication을 사용한 유저 관리 및 게시글 CRUD 구현",
          "Spotify API 를 활용하여 유저의 인풋을 검증하는 로직 제작",
        ],
        spec: [
          "Library: React",
          "State Management: Redux-toolkit",
          "Style: Sass-scss",
          "DB: Firebase",
        ],
        description: "악기별 악보 커머스 서비스",
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
    contentsArticleInfo: [
      {
        title: "웹 개발 작업 프로세스 정리",
        publishedAt: "2023-09-05",
        description: "웹 개발 작업 프로세스 정리글 입니다",
        thumbnailUrl:
          "https://velog.velcdn.com/images/wansook0316/post/88c6a6da-3a22-45cd-8705-7ff1e66feb8f/image.png",
        slug: "웹 개발 작업 프로세스 정리",
      },
      {
        title: "효율적인 소프트웨어 개발을 위한 아키텍처와 디자인 패턴",
        publishedAt: "2023-09-23",
        description: "웹 개발 작업 프로세스 정리글 입니다",
        thumbnailUrl:
          "https://velog.velcdn.com/images/ethan_world/post/fd78f0a8-aaf2-4bd6-b3a1-d9380f1cfde3/image.jpeg",
        slug: "효율적인 소프트웨어 개발을 위한 아키텍처와 디자인 패턴",
      },
    ],
  },
];
