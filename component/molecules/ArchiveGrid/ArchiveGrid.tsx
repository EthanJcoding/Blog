import { type Content as ContentType } from "contentlayer/generated";
import Grid from "../Grid/Grid";

interface ArchiveGridProps {
  contents: ContentType[];
}

const ArchiveGrid = ({ contents }: ArchiveGridProps) => {
  return (
    <>
      <div className="col-span-2 xlg:col-span-4 h-full w-full text-xl flex flex-col justify-end">
        Welcome to my archive ✏️
      </div>
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
    </>
  );
};

export default ArchiveGrid;
