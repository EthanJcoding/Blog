import { widgets } from "../../atoms/Icon/index";
import { Button } from "../../atoms/Button/Button";
import { A12_Grid } from "../../atoms/A12_Grid/A12_Grid";
type widget = keyof typeof widgets;

const MainGrid = ({}) => {
  const widgetArray: widget[] = Object.keys(widgets) as widget[];

  const GridHeader = () => {
    const goms_stacks = [
      { stack: "react", color: "149ECA" },
      { stack: "typescript", color: "3178C6" },
      { stack: "firebase", color: "FFCA28" },
      { stack: "redux", color: "764ABC" },
      { stack: "sass", color: "CC6699" },
    ];

    const codetech_stacks = [
      { stack: "react", color: "149ECA" },
      { stack: "typescript", color: "3178C6" },
      { stack: "zustand", color: "443E38" },
      { stack: "tailwindcss", color: "06B6D4" },
    ];

    return (
      <>
        {widgetArray.map((el, idx) => (
          <Button widgetType={el} key={idx} intent="grid" size="grid_md" />
        ))}
        <A12_Grid stacks={goms_stacks} project="악보의 정원" />
        <A12_Grid stacks={codetech_stacks} project="코드테크" />
      </>
    );
  };

  return (
    <div className="relative flex-1 xl:w-[820px] xl:flex-none">
      <div className="grid grid-cols-2 grid-rows-4 xlg:grid-cols-4 xlg:grid-rows-2 gap-10 place-items-center">
        <GridHeader />
      </div>
    </div>
  );
};

export { MainGrid };
