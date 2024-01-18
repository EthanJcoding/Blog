import { Button, Cloud, Text } from "component/atoms";
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
        <div className="mr-10 w-full">
          <Git_Status />
          <div className="grid gap-10 grid-cols-2">
            <Text
              className="col-span-1 sm:col-span-2 flex flex-col"
              size="medium_content"
            >
              Recent Writings ✏️
            </Text>
            <div className="col-span-1 flex justify-end sm:hidden">
              <Button
                onClick={handleButtonClick}
                icon="MdArrowForward"
                size="extra_sm"
              />
            </div>
            {contentsArticleInfo.map((content, idx) => (
              <Grid
                key={idx}
                hasThumbnail={true}
                contents={content}
                gridType="A22"
                size="grid_flexible"
                intent="doubleA22"
              />
            ))}
            {/* <Grid
              hasThumbnail={true}
              contents={contentsArticleInfo[currentIndex]}
              gridType="A22"
              size="grid_flexible"
              intent="hidden"
            /> */}
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
