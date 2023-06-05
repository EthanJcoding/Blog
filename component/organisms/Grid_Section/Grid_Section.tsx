import { Git_Status } from "@/component/atoms/Git_Status/Git_Status";
import { Icon } from "@/component/atoms/Icon/Icon";
import { useRouter } from "next/router";

const Grid_Section = ({ children }: { children: JSX.Element }) => {
  const router = useRouter();
  const query = router.pathname;
  const shouldHideGitStatus = query === "/" ? false : true;

  return (
    <>
      <div className="relative xl:w-[820px] xl:flex-none ">
        <div className="h-full w-full">
          <div className="h-full w-full bg-blue-500">hi</div>
          <div className="h-full w-full bg-blue-500">hi</div>
          <div className="h-full w-full bg-blue-500">hi</div>
        </div>
        {!shouldHideGitStatus && <Git_Status />}
        <div className="grid grid-cols-2 grid-rows-8 xlg:grid-cols-8 xlg:grid-rows-8 gap-10 place-items-center min-h-[784px] ">
          {children}
        </div>
      </div>
    </>
  );
};

export { Grid_Section };
