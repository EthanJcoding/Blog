import { Icon } from "../../atoms/Icon/Icon";
import { buttonStyles } from "../../atoms/Button/Button";
import { widgets } from "../../atoms/Icon/index";

type widget = keyof typeof widgets;

interface IconButtonProps {}

const IconButton = ({}) => {
  const widgetArray: widget[] = Object.keys(widgets) as widget[];

  const IconColorDistribute = (widget: widget): string => {
    if (widget === "FaGithubSquare") return "black";
    if (widget === "BsInstagram") return "instagram";
    if (widget === "SiVelog") return "1EBF8F";
    else return "black";
  };

  const lastTwoWidgets = widgetArray.slice(-2);

  return (
    <div className="relative flex-1 xl:w-[820px] xl:flex-none">
      <div className="grid grid-cols-2 grid-rows-4 xlg:grid-cols-4 xlg:grid-rows-2 gap-10 place-items-center">
        <div className="w-full h-full col-span-2 row-span-2 border rounded-3xl p-5 shadow-md min-w-[21.375rem] min-h-[21.375rem] order-last xlg:order-first">
          <div className="bg-gray-500 bg-opacity-50 h-full "></div>
        </div>
        {widgetArray.map((el, idx) => (
          <div
            key={idx}
            className="flex-col active:scale-95 justify-start rounded-3xl shadow-md text-sm font-medium w-[9.375rem] h-36 min-w-[9.375rem] min-h-[9.375rem] p-5 border xl:w-44 xl:h-44 hover:bg-hover ease-in-out duration-300"
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
      {/* <>
        <div className="grid grid-cols-2 grid-rows-2 gap-10 h-[795px]">
          <div className="w-[24.5rem] h-[24.5rem] row-span-2 border rounded-3xl p-5 shadow-md min-w-[21.875rem] min-h-[21.875rem] order-last lg:order-first md:order-first">
            <div className="bg-gray-500 bg-opacity-50 h-full "> hi</div>
          </div>
          {widgetArray.slice(0, -2).map((el, idx) => (
            <div
              key={idx}
              className="flex-col justify-start active:scale-95 rounded-3xl shadow-md text-sm font-medium w-36 h-36 min-w-[9.375rem] min-h-[9.375rem] p-5 border xl:w-44 xl:h-44"
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
          <div className="grid grid-cols-2 gap-10">
            {lastTwoWidgets.map((el, idx) => (
              <div
                key={idx}
                className="flex-col justify-start active:scale-95 rounded-3xl shadow-md text-sm font-medium w-36 h-36 min-w-[9.375rem] min-h-[9.375rem] p-5 border xl:w-44 xl:h-44"
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
        </div>
      </> */}
    </div>
  );
};

export { IconButton };
