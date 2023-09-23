import { Cloud } from "component/atoms";
import { Grid, Git_Status } from "component/molecules";
import React from "react";
import { contentsForMainPage, useGenerationStore } from "services";

const Grid_Section = ({ children }: { children: JSX.Element }) => {
  const { isFolded } = useGenerationStore();
  const [{ contentsArticleInfo }] = contentsForMainPage;

  const renderGridContent = () => (
    <>
      <Git_Status />
      <div className="grid gap-10">{children}</div>
    </>
  );

  const renderFoldedContent = () => (
    <div className="flex flex-col xlg:flex-row w-full justify-between">
      <div className="mr-10">
        <Git_Status />
        <div className="grid gap-10 ">
          <div className="col-span-1 2.5xlg:col-span-2 text-xl flex flex-col justify-end">
            Recent Writings ✏️
          </div>
          {contentsArticleInfo.map((content, idx) => (
            <Grid
              key={idx}
              hasThumbnail={true}
              contents={content}
              gridType="A22"
              size="grid_flexible"
              intent="Flex_grid"
            />
          ))}
        </div>
      </div>
      <div className="grid gap-10 h-full">{children}</div>
    </div>
  );

  return (
    <div className="w-full">
      <Cloud />
      <div className="text-xl justify-end my-10">Welcome 👋</div>

      {isFolded ? renderFoldedContent() : renderGridContent()}
    </div>
  );
};

export default Grid_Section;
