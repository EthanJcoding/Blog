import React from "react";
import Git_Status from "component/molecules/Git_Status/Git_Status";
import { Grid } from "component/molecules/Grid/Grid";
import { useGenerationStore } from "services/hooks";
import { contentsForMainPage } from "services";

const Grid_Section = ({ children }: { children: JSX.Element }) => {
  const { isFolded } = useGenerationStore();
  const [{ contentsGoodCode }] = contentsForMainPage;

  return (
    <div className="">
      <div className="h-40 w-full absolute overflow-hidden rounded-t-3xl">
        <div className="wave2 animate-wave absolute opacity-90"></div>
        <div className="wave animate-wave absolute opacity-80"></div>
      </div>

      <div className="h-40 mb-10"></div>
      <div className="text-xl justify-end my-10 w-full">Welcome 👋</div>

      {isFolded ? (
        <div className="flex flex-col xlg:flex-row w-full">
          <div className="hidden w-full xlg:flex xlg:mr-10 flex-col">
            <Git_Status />
            <div className="grid gap-10">
              <div className="col-span-2 xlg:col-span-2 h-full w-full text-xl flex flex-col justify-end">
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
      ) : (
        <>
          <Git_Status />
          <div className="grid gap-10">{children}</div>
        </>
      )}
    </div>
  );
};

export { Grid_Section };
