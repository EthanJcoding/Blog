import { widgets } from "../../atoms/Icon/index";
import { Button } from "../../atoms/Button/Button";

type widget = keyof typeof widgets;

const MainGrid = ({}) => {
  const widgetArray: widget[] = Object.keys(widgets) as widget[];

  return (
    <div className="relative flex-1 xl:w-[820px] xl:flex-none">
      <div className="grid grid-cols-2 grid-rows-4 xlg:grid-cols-4 xlg:grid-rows-2 gap-10 place-items-center">
        <div className="w-full h-full col-span-2 row-span-2 border rounded-3xl p-5 shadow-md min-w-[21.375rem] min-h-[21.375rem] order-last xlg:order-first">
          <div className="bg-gray-500 bg-opacity-50 h-full "></div>
        </div>
        {widgetArray.map((el, idx) => (
          <Button widgetType={el} key={idx} intent="grid" size="grid_size" />
        ))}
      </div>
    </div>
  );
};

export { MainGrid };
