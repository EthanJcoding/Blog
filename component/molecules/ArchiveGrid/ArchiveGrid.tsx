import { type Content as ContentType } from "contentlayer/generated";
import Grid from "../Grid/Grid";

interface ArchiveGridProps {
  contents: ContentType[];
}

const ArchiveGrid = ({ contents }: ArchiveGridProps) => {
  console.log(contents);

  return (
    <>
      {contents.map((content, idx) => {
        return (
          <Grid
            key={idx}
            hasThumbnail={true}
            gridType="A22"
            contents={content}
            intent="A22_grid"
            size="grid_xlg"
          />
        );
      })}
    </>
  );
};

export default ArchiveGrid;
