import { Icon } from "../../atoms/Icon/Icon";
import { buttonStyles } from "../../atoms/Button/Button";
import { widgets } from "../../atoms/Icon/index";

type widget = keyof typeof widgets;

interface IconButtonProps {}

const IconButton = ({}) => {
  const widgetArray: widget[] = Object.keys(widgets) as widget[];

  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      {widgetArray.map((el, idx) => (
        <div
          key={idx}
          className="flex-col justify-start active:scale-95 inline-flex items-center rounded-md text-sm font-medium w-40 h-40 p-5 border"
        >
          <Icon
            widget={el}
            size="m"
            color={el === "SiVelog" ? "1EBF8F" : "black"}
          />
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
      ))}
    </div>
  );
};

export { IconButton };
