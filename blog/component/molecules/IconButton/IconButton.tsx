import { Icon } from "../../atoms/Icon/Icon";
import { buttonStyles } from "../../atoms/Button/Button";
import { widgets } from "../../atoms/Icon/index";

type widget = keyof typeof widgets;

interface IconButtonProps {}

const IconButton = ({}) => {
  const widgetArray: widget[] = Object.keys(widgets) as widget[];

  const IconColorDistribute = (widget: widget): string => {
    if (widget === "FaGithubSquare") return "black";
    if (widget === "FaInstagramSquare") return "pink";
    if (widget === "SiVelog") return "1EBF8F";
    else return "black";
  };

  return (
    <div className="grid grid-cols-2 gap-10">
      {widgetArray.map((el, idx) => (
        <div
          key={idx}
          className="flex-col justify-start active:scale-95 inline-flex rounded-3xl shadow-md text-sm font-medium w-40 h-40 p-5 border xl:w-44 xl:h-44"
        >
          <div className="h-full flex flex-col justify-between">
            <Icon widget={el} size="m" color={IconColorDistribute(el)} />
            <div className="flex items-start my-2 font-semibold">
              EthanJcoding
            </div>
            <button
              className={buttonStyles({
                intent: "github_Follow",
                size: "extra_sm",
              })}
            >
              Follow
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export { IconButton };
