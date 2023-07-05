import { Git_Status } from "@/component/molecules/Git_Status/Git_Status";
import { useGenerationStore } from "@/hooks";

const Grid_Section = ({ children }: { children: JSX.Element }) => {
  const { isFolded } = useGenerationStore();

  return (
    <div className="">
      {isFolded ? (
        <>
          <div className="h-40 w-full xl:w-[820px] absolute overflow-hidden rounded-t-3xl">
            <div className="wave2 animate-wave absolute opacity-90"></div>
            <div className="wave animate-wave absolute opacity-80"></div>
          </div>

          <>
            <div className="h-40 mb-10"></div>
            <div className="w-full text-xl justify-end mb-10">Welcome 👋</div>
            <Git_Status />
          </>

          <div className="grid gap-10">{children}</div>
        </>
      ) : (
        <>
          <div className="h-40 w-full absolute overflow-hidden rounded-t-3xl">
            <div className="wave2 animate-wave absolute opacity-90"></div>
            <div className="wave animate-wave absolute opacity-80"></div>
          </div>

          <>
            <div className="h-40 mb-10"></div>
            <div className="text-xl justify-end my-10 w-full">Welcome 👋</div>
            <div className="flex flex-col xlg:flex-row w-full">
              <Git_Status />
              <div className="grid gap-10">{children}</div>
            </div>
          </>
        </>
      )}
    </div>
  );
};

export { Grid_Section };
