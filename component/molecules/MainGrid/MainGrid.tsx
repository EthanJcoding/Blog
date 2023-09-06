import { widgets } from "component/atoms/Icon";
import { contentsForMainPage } from "services";
import { Grid } from "..";

type widget = keyof typeof widgets;

const MainGrid = () => {
  const widgetArray: widget[] = Object.keys(widgets) as widget[];
  const [{ projects, projectsRecall, contentsGoodCode }] = contentsForMainPage;

  return (
    <>
      {widgetArray.map((el, idx) => (
        <Grid contents={el} key={idx} hasThumbnail={true} gridType="default" />
      ))}
      <div className="col-span-2 xlg:col-span-4 h-full w-full text-xl flex flex-col justify-end">
        Projects 💻
      </div>
      {projects.map((project, idx) => (
        <Grid key={idx} contents={project} hasThumbnail={true} gridType="A12" />
      ))}
      {projectsRecall.map((content, idx) => (
        <Grid
          key={idx}
          contents={content}
          hasThumbnail={false}
          gridType="default"
        />
      ))}
      <div className="col-span-2 xlg:col-span-4 h-full w-full text-xl flex flex-col justify-end">
        Contents ✏️
      </div>
      {contentsGoodCode.map((content, idx) => (
        <Grid
          key={idx}
          hasThumbnail={true}
          contents={content}
          gridType="A22"
          intent="A22_grid"
          size="grid_xlg"
        />
      ))}
    </>
  );
};

export default MainGrid;
