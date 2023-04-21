import { Icon } from "../../atoms/Icon/Icon";
import { buttonStyles } from "../../atoms/Button/Button";
import { widgets } from "../../atoms/Icon/index";

type widget = keyof typeof widgets;

const IconButton = ({}) => {
  const widgetArray: widget[] = Object.keys(widgets) as widget[];

  return (
    <div>
      {widgetArray.map((el, idx) => (
        <div key={idx} className="flex-col justify-start w-full">
          <Icon widget={el} size="m" />
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
