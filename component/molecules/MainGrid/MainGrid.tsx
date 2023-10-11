import { widgets } from "component/atoms/Icon";
import { contentsForMainPage, useGenerationStore } from "services";
import { Grid } from "..";
import { Text } from "component/atoms";

type widget = keyof typeof widgets;

const MainGrid = () => {
  const { isFolded } = useGenerationStore();
  const widgetArray: widget[] = Object.keys(widgets) as widget[];
  const [{ projectsRecall, contentsArticleInfo }] = contentsForMainPage;

  return (
    <>
      {widgetArray.map((el, idx) => (
        <Grid contents={el} key={idx} hasThumbnail={true} gridType="default" />
      ))}
      <Text
        className="col-span-2 xlg:col-span-4 h-full w-full flex flex-col justify-end"
        size="medium_content"
      >
        Contents ✏️
      </Text>
      {isFolded
        ? null
        : contentsArticleInfo.map((content, idx) => (
            <Grid
              key={idx}
              hasThumbnail={true}
              contents={content}
              gridType="A22"
              intent="A22_grid"
              size="grid_xlg"
            />
          ))}
      {projectsRecall.map((content, idx) => (
        <Grid
          key={idx}
          contents={content}
          hasThumbnail={false}
          gridType="default"
        />
      ))}
    </>
  );
};

export default MainGrid;
