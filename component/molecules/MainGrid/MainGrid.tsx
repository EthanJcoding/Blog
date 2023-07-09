import { widgets } from "../../atoms/Icon/index";
import { Grid } from "../Grid/Grid";
import { projects } from "./MainGrid_Contents";
import { useGenerationStore } from "@/hooks";

type widget = keyof typeof widgets;

const MainGrid = ({}) => {
  const widgetArray: widget[] = Object.keys(widgets) as widget[];
  const { isFolded } = useGenerationStore();

  const contentsGoodCode = [
    {
      title: "유연한 코드",
      content: "안녕",
      thumbnail:
        "https://velog.velcdn.com/images/dnr6054/post/21e308c6-106e-46cc-aba0-c01191af3e3f/image.png",
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
      {isFolded ? null : (
        <>
          <div className="col-span-2 xlg:col-span-4 h-full w-full text-xl flex flex-col justify-end">
            Recent Writings ✏️
          </div>
          {contentsGoodCode.map((content, idx) => (
            <Grid
              key={idx}
              hasThumbnail={true}
              contents={content}
              gridType="A22"
              size="grid_xlg"
              intent="A22_grid"
            />
          ))}
        </>
      )}
    </>
  );
};

export { MainGrid };
