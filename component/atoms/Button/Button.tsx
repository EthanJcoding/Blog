import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/twMerge";
import { widgets } from "../Icon/index";
import { Icon } from "../Icon/Icon";
import { Paragraph } from "../Paragraph/Paragraph";
import Link from "next/link";

type widget = keyof typeof widgets;

const buttonStyles = cva(
  "active:scale-95 hover:bg-hover ease-in-out duration-300",
  {
    variants: {
      intent: {
        default: "bg-slate-900 text-white hover:bg-slate-700",
        secondary: "bg-slate-700",
        outline: "bg-transparent border border-slate-200 hover:bg-slate-100",
        iconButton: "border rounded-3xl flex-col p-6",
        github_Follow: "bg-gray-200 ",
        grid: "flex-col justify-start rounded-3xl shadow-md border",
        big_grid: "col-span-2 row-span-1 border rounded-3xl p-5 shadow-md",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        extra_sm: "h-6",
        iconButton: "w-40 h-40",
        grid_md:
          "xl:w-44 xl:h-44 w-[9.375rem] h-36 min-w-[9.375rem] min-h-[9.375rem] text-sm font-medium p-5",
        grid_lg: "w-full h-full min-w-[21.375rem] min-h-[9.375rem]",
      },
    },
    defaultVariants: {
      intent: "big_grid",
      size: "grid_lg",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  icon?: keyof typeof widgets;
  idx?: number;
  widgetType?: widget;
}

const IconDetailDistribute = (
  widget?: widget
): { color: string; detail: string; link?: string } => {
  switch (widget) {
    case "FaGithubSquare":
      return {
        color: "black",
        detail: "EthanJcoding",
        link: "https://github.com/EthanJcoding",
      };
    case "BsInstagram":
      return {
        color: "instagram",
        detail: "@_junilJ",
        link: "https://www.instagram.com/_junilj/",
      };
    case "SiVelog":
      return {
        color: "1EBF8F",
        detail: "ethan_world.log",
        link: "https://velog.io/@ethan_world",
      };
    default:
      return {
        color: "black",
        detail: "archive",
        link: "/archive",
      };
  }
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      size = "default",
      intent = "default",
      icon,
      widgetType,
      ...props
    },
    ref
  ) => {
    if (intent === "grid") {
      const { color, detail, link } = IconDetailDistribute(widgetType);

      return detail === "archive" && link ? (
        <Link href={link}>
          <button className={cn(buttonStyles({ intent, size }))}>
            <div className="h-full flex flex-col">
              <Icon widget={widgetType} size="m" color={color} />
              <Paragraph
                size="small_content"
                className="flex items-start mt-4 font-semibold"
              >
                {detail}
              </Paragraph>
            </div>
          </button>
        </Link>
      ) : (
        <a href={link} target="_blank">
          <button className={cn(buttonStyles({ intent, size }))}>
            <div className="h-full flex flex-col">
              <Icon widget={widgetType} size="m" color={color} />
              <Paragraph
                size="small_content"
                className="flex items-start mt-4 font-semibold"
              >
                {detail}
              </Paragraph>
            </div>
          </button>
        </a>
      );
    }

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
