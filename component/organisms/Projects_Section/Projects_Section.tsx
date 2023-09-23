import { Cloud } from "component/atoms";

const Archive_Section = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="w-full xlg:min-w-[824px]">
      <Cloud />
      <div className="flex flex-col xlg:flex-row w-full">
        <div className="grid gap-10 w-full">{children}</div>
      </div>
    </div>
  );
};

export default Archive_Section;
