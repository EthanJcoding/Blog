import { Cloud } from "component/atoms";
import { useGenerationStore } from "services";

const Archive_Section = ({ children }: { children: JSX.Element }) => {
  const { isFolded } = useGenerationStore();
  const gridColSpan = isFolded ? "" : "";

  return (
    <div className="w-full min-w-[824px]">
      <Cloud />
      <div className="flex flex-col xlg:flex-row w-full">
        <div className="grid gap-10 w-full">
          <div
            className={`col-span-4 ${gridColSpan} h-full w-full text-xl flex flex-col justify-end`}
          >
            Archive 📚
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Archive_Section;
