import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/twMerge";
import { icons, widgets } from "../Icon/index";
import { Icon } from "../Icon/Icon";
import { Paragraph } from "../Paragraph/Paragraph";

type widget = keyof typeof widgets;

const buttonStyles = cva("", {
  variants: {
    intent: {
      default: "bg-slate-900 text-white hover:bg-slate-700",
      secondary: "bg-slate-700",
      outline: "bg-transparent border border-slate-200 hover:bg-slate-100",
      iconButton: "border rounded-3xl flex-col p-6",
      github_Follow: "bg-gray-200 ",
      grid: "flex-col active:scale-95 justify-start rounded-3xl shadow-md border hover:bg-hover ease-in-out duration-300",
    },
    size: {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-2 rounded-md",
      extra_sm: "h-6",
      iconButton: "w-40 h-40",
      grid_size:
        "xl:w-44 xl:h-44 w-[9.375rem] h-36 min-w-[9.375rem] min-h-[9.375rem] text-sm font-medium p-5",
    },
  },
  defaultVariants: {
    intent: "default",
    size: "default",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  icon?: keyof typeof widgets;
  idx?: number;
  widgetType: widget;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, intent, icon, widgetType, ...props }, ref) => {
    const IconColorDistribute = (widget: widget): string => {
      if (widget === "FaGithubSquare") return "black";
      if (widget === "BsInstagram") return "instagram";
      if (widget === "SiVelog") return "1EBF8F";
      else return "black";
    };

    const IconDetailDistribute = (widget: widget): string => {
      if (widget === "FaGithubSquare") return "EthanJcoding";
      if (widget === "BsInstagram") return "@_junilJ";
      if (widget === "SiVelog") return "ethan_world.log";
      else return "Archive";
    };

    if (intent === "grid") {
      return (
        <button className={cn(buttonStyles({ intent, size }))}>
          <div className="h-full flex flex-col">
            <Icon
              widget={widgetType}
              size="m"
              color={IconColorDistribute(widgetType)}
            />
            <Paragraph
              size="small_content"
              className="flex items-start mt-4 font-semibold"
            >
              {IconDetailDistribute(widgetType)}
            </Paragraph>
          </div>
        </button>
      );
    } else
      return (
        <button
          ref={ref}
          className={cn(buttonStyles({ intent, size, className }))}
          {...props}
        />
      );
  }
);

export { Button, buttonStyles };
