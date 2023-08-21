import { Cloud } from "component/atoms";
import { Grid, Contribution } from "component/molecules";
import React from "react";
import { contentsForMainPage, useGenerationStore } from "services";

const Grid_Section = ({ children }: { children: JSX.Element }) => {
  const { isFolded } = useGenerationStore();
  const [{ contentsGoodCode }] = contentsForMainPage;

  const renderGridContent = () => (
    <div className="hidden w-full xlg:flex xlg:mr-10 flex-col">
      <div className="grid gap-10">{children}</div>
    </div>
  );

  const renderFoldedContent = () => (
    <div className="flex flex-col xlg:flex-row w-full">
      <div className="hidden w-full xlg:flex xlg:mr-10 flex-col">
        <div className="grid gap-10 ">
          <div className="col-span-1 2xlg:col-span-2 text-xl flex flex-col justify-end">
            Recent Writings ✏️
          </div>
          {contentsGoodCode.map((content, idx) => (
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
      <div className="grid gap-10">{children}</div>
    </div>
  );

  return (
    <div className={isFolded ? "w-full" : "w-full"}>
      <Cloud />
      <div className="text-xl justify-end my-10 w-full">Welcome 👋</div>
      {isFolded ? renderFoldedContent() : renderGridContent()}
    </div>
  );
};

export default Grid_Section;
