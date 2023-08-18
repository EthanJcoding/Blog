import Grid from "../Grid/Grid";
import { contentsForMainPage } from "services";

const ArchiveGrid = () => {
  const [{ projectsRecall }] = contentsForMainPage;

  return (
    <>
      {projectsRecall.map((content, idx) => {
        return (
          <Grid
            key={idx}
            hasThumbnail={true}
            gridType="A22"
            contents={content}
            intent="Flex_grid"
            size="grid_flexible"
          />
        );
      })}
    </>
  );
};

export default ArchiveGrid;
