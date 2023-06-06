import { Git_Status } from "@/component/atoms/Git_Status/Git_Status";
import { useRouter } from "next/router";
import img_wave from "../../../public/img-wave.svg";
import Image from "next/image";

const Grid_Section = ({ children }: { children: JSX.Element }) => {
  const router = useRouter();
  const query = router.pathname;
  const shouldHideGitStatus = query === "/" ? false : true;

  return (
    <>
      <div className="relative xl:w-[820px] xl:flex-none ">
        <div className="h-full w-full">
          {/* <Image
            src={img_wave}
            alt="sky"
            width={1600}
            height={160}
            className="animate-wave overflow-hidden absolute"
          /> */}

          <div className="bg-[url('/public/img-wave.svg')] h-16"></div>
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
