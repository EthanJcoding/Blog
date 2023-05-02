import { widgets } from "../../atoms/Icon/index";
import { Button } from "../../atoms/Button/Button";
import { Goms_grid } from "../../atoms/GOMS_Grid/Goms_grid";
type widget = keyof typeof widgets;

const MainGrid = ({}) => {
  const widgetArray: widget[] = Object.keys(widgets) as widget[];

  const GridHeader = () => {
    return (
      <>
        <Goms_grid />
        {widgetArray.map((el, idx) => (
          <Button widgetType={el} key={idx} intent="grid" size="grid_size" />
        ))}
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
