import { Git_Status } from "@/component/molecules/Git_Status/Git_Status";
import { useRouter } from "next/router";

const Grid_Section = ({ children }: { children: JSX.Element }) => {
  const router = useRouter();
  const query = router.pathname;
  const shouldHideGitStatus = query !== "/";

  return (
    <div className="relative xl:w-[824px]">
      {!shouldHideGitStatus && (
        <div className="h-40 w-full xl:w-[820px] absolute overflow-hidden rounded-t-3xl">
          <div className="wave2 animate-wave absolute opacity-90"></div>
          <div className="wave animate-wave absolute opacity-80"></div>
        </div>
      )}

      {!shouldHideGitStatus && (
        <>
          <div className="h-40 mb-10"></div>
          <div className="text-xl justify-end mb-10">Welcome 👋</div>
          <Git_Status />
        </>
      )}
      <div className="grid gap-10">{children}</div>
    </div>
  );
};

export { Grid_Section };
