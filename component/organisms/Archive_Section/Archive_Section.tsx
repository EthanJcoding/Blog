import { useGenerationStore } from "services";

const Archive_Section = ({ children }: { children: JSX.Element }) => {
  const { isFolded } = useGenerationStore();

  return (
    <div className="w-full">
      {isFolded ? (
        <div className="flex flex-col xlg:flex-row w-full">
          <div className="grid gap-10">{children}</div>
        </div>
      ) : (
        <div className="flex flex-col xlg:flex-row w-full">
          <div className="grid gap-10 ">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Archive_Section;
