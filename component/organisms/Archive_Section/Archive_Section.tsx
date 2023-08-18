import { Cloud } from "component/atoms";
import { useGenerationStore } from "services";

const Archive_Section = ({ children }: { children: JSX.Element }) => {
  const { isFolded } = useGenerationStore();
  const gridColSpan = isFolded ? "col-span-4" : "col-span-2";

  return (
    <div className="w-full min-w-[824px]">
      <Cloud />
      <div className="flex flex-col xlg:flex-row w-full">
        <div className="grid gap-10 w-full">
          <div
            className={`${gridColSpan} h-full w-full text-xl flex flex-col justify-end`}
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
