import { Git_Status } from "@/component/atoms/Git_Status/Git_Status";
import { MainGrid } from "@/component/molecules/MainGrid/MainGrid";

const Grid_Section = () => {
  // 1256 rows 6
  // 1040 rows 5
  // 824 rows 4
  return (
    <>
      <Git_Status />
      <div className="relative flex-1 xl:w-[820px] xl:flex-none ">
        <div className="grid grid-cols-2 grid-rows-8 xlg:grid-cols-8 xlg:grid-rows-8 gap-10 place-items-center min-h-[784px] ">
          <MainGrid />
        </div>
      </div>
    </>
  );
};

export { Grid_Section };
