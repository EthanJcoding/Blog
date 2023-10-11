import { Cloud, Text } from "component/atoms";
import { Grid, Git_Status } from "component/molecules";
import React, { useState } from "react";
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

  const RenderFoldedContent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleButtonClick = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % contentsArticleInfo.length
      );
    };
    return (
      <div className="flex flex-col xlg:flex-row w-full justify-between">
        <div className="mr-10">
          <Git_Status />
          <div className="grid gap-10 grid-cols-2">
            <Text
              className="col-span-1 2.5xlg:col-span-2 flex flex-col justify-end 2.5xlg:max-w-[302px] w-full"
              size="medium_content"
            >
              Recent Writings ✏️
            </Text>
            <button
              className="col-span-1 2.5xlg:col-span-2 2.5xlg:hidden"
              onClick={handleButtonClick}
            >
              hi
            </button>
            <Grid
              hasThumbnail={true}
              contents={contentsArticleInfo[currentIndex]}
              gridType="A22"
              size="grid_flexible"
              intent="A22_grid"
            />
          </div>
        </div>
        <div className="grid gap-10 h-full">{children}</div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <Cloud />
      <Text className="justify-end my-10" size="medium_content">
        Welcome 👋
      </Text>

      {isFolded ? <RenderFoldedContent /> : renderGridContent()}
    </div>
  );
};

export default Grid_Section;
