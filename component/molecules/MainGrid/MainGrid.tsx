import { widgets } from "../../atoms/Icon/index";
import { Grid } from "../Grid/Grid";
import { projects } from "./MainGrid_Contents";

type widget = keyof typeof widgets;

const MainGrid = ({}) => {
  const widgetArray: widget[] = Object.keys(widgets) as widget[];

  const contentsGoodCode = [
    {
      title: "유연한 코드",
      content: "안녕",
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
          hasThumbnail={true}
          gridType="default"
        />
      ))}
      <div className="col-span-2 xlg:col-span-4 h-full w-full text-xl flex flex-col justify-end">
        Projects 💻
      </div>
      {projects.map((project, idx) => (
        <Grid key={idx} contents={project} hasThumbnail={true} gridType="A12" />
      ))}
      <div className="col-span-2 xlg:col-span-4 h-full w-full text-xl flex flex-col justify-end">
        Good code I define ✏️
      </div>
      {contentsGoodCode.map((content, idx) => (
        <Grid
          key={idx}
          hasThumbnail={false}
          contents={content}
          gridType="A22"
        />
      ))}
    </>
  );
};

export { MainGrid };
