import Grid from "../Grid/Grid";
import { contentsForMainPage } from "services";

const ArchiveGrid = () => {
  const [{ projects }] = contentsForMainPage;

  return (
    <>
      {projects.map((content, idx) => {
        return (
          <Grid
            key={idx}
            hasThumbnail={true}
            gridType="A14"
            contents={content}
            intent="Flex_grid"
          />
        );
      })}
    </>
  );
};

export default ArchiveGrid;
