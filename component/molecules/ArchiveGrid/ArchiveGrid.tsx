import Grid from "../Grid/Grid";
import { useGenerationStore, contentsForMainPage } from "services";

const ArchiveGrid = () => {
  const { isFolded } = useGenerationStore();
  const [{ projectsRecall }] = contentsForMainPage;

  const gridColSpan = isFolded ? "xlg:col-span-6" : "xlg:col-span-4";

  return (
    <>
      <div
        className={`col-span-2 ${gridColSpan} h-full w-full text-xl flex flex-col justify-end`}
      >
        Archive 📚
      </div>
      {projectsRecall.map((content, idx) => {
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
