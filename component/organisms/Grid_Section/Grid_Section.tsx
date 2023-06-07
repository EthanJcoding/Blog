import { Git_Status } from "@/component/atoms/Git_Status/Git_Status";
import { useRouter } from "next/router";

const Grid_Section = ({ children }: { children: JSX.Element }) => {
  const router = useRouter();
  const query = router.pathname;
  const shouldHideGitStatus = query === "/" ? false : true;

  return (
    <div className="relative xl:w-[820px] xl:flex-none ">
      {!shouldHideGitStatus && (
        <div className="h-40 w-full xl:w-[820px] absolute overflow-hidden rounded-t-3xl">
          <div className="wave2 animate-wave absolute opacity-90"></div>
          <div className="wave animate-wave absolute opacity-80"></div>
        </div>
      )}

      {!shouldHideGitStatus && (
        <>
          <div className="h-40 mb-10"></div>
          <div className="col-span-2 xlg:col-span-8 h-full w-full text-xl flex flex-col justify-end mb-16">
            Welcome 👋
          </div>
          <Git_Status />
        </>
      )}
      <div className="grid grid-cols-2 grid-rows-8 xlg:grid-cols-8 xlg:grid-rows-8 gap-10 place-items-center min-h-[784px] ">
        {children}
      </div>
    </div>
  );
};

export { Grid_Section };
