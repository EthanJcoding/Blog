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
            gridType="ProjectGrid"
            contents={content}
          />
        );
      })}
    </>
  );
};

export default ArchiveGrid;
