import { widgets } from "../../atoms/Icon/index";
import { Grid } from "../Grid/Grid";
import { projects, contentsGoodCode as contents } from "./MainGrid_Contents";
import { useGenerationStore } from "hooks";
import { type Content as contentType } from "contentlayer/generated";

type widget = keyof typeof widgets;

interface MainGridProps {
  allContents: contentType[];
}

const MainGrid = ({ allContents }: MainGridProps) => {
  const widgetArray: widget[] = Object.keys(widgets) as widget[];
  const { isFolded } = useGenerationStore();

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
      {allContents.map((content, idx) => (
        <Grid
          key={idx}
          contents={content}
          hasThumbnail={false}
          gridType="default"
          intent="grid"
          size="grid_md"
        />
      ))}
      <div className="col-span-2 xlg:col-span-4 h-full w-full text-xl flex flex-col justify-end">
        Good code I define ✏️
      </div>
      {contents.map((content, idx) => (
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
          {contents.map((content, idx) => (
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
