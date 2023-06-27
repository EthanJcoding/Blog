import { widgets } from "../../atoms/Icon/index";
import { Grid } from "../Grid/Grid";
type widget = keyof typeof widgets;

interface Project {
  name: string;
  stacks: { stack: string; color: string }[];
}

const MainGrid = ({}) => {
  const widgetArray: widget[] = Object.keys(widgets) as widget[];

  const projects: Project[] = [
    {
      name: "악보의 정원",
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
      content: "",
    },
    {},
  ];

  return (
    <>
      {widgetArray.map((el, idx) => (
        <Grid
          widgetType={el}
          key={idx}
          intent="grid"
          size="grid_md"
          hasThumbnail={false}
          gridType="default"
        />
      ))}
      <div className="col-span-2 xlg:col-span-8 h-full w-full text-xl flex flex-col justify-end">
        Projects 💻
      </div>
      {projects.map((project, idx) => (
        <Grid key={idx} contents={project} hasThumbnail={true} gridType="A12" />
      ))}
      <div className="col-span-2 xlg:col-span-8 h-full w-full text-xl flex flex-col justify-end">
        Good code I define ✏️
      </div>
      {contentsGoodCode.map((content, idx) => (
        <Grid
          key={idx}
          hasThumbnail={false}
          content={content.content}
          title={content.title}
          gridType="A12"
        />
      ))}
      {contentsGoodCode.map((content, idx) => (
        <Grid key={idx} gridType="A22" hasThumbnail={false} />
      ))}
    </>
  );
};

export { MainGrid };
