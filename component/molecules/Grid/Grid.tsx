import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../../utils/twMerge";
import { widgets } from "../../atoms/Icon/index";
import { Icon } from "../../atoms/Icon/Icon";
import { Text } from "../../atoms/Text/Text";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";

type widget = keyof typeof widgets;

const gridStyles = cva(
  "active:scale-95 hover:bg-hover ease-in-out duration-300",
  {
    variants: {
      intent: {
        grid: "flex-col justify-start rounded-3xl shadow-md border",
        A21_grid:
          "col-span-2 xlg:col-span-4 xlg:row-span-2 border rounded-3xl p-5 shadow-md",
        A22_grid:
          "col-span-2 xlg:col-span-4 xlg:row-span-4 border rounded-3xl p-5 shadow-md",
      },
      size: {
        grid_md:
          "xl:w-44 xl:h-44 sm:w-[10.625rem] sm:h-[10.625rem] min-w-[9.375rem] min-h-[9.375rem] text-sm font-medium p-5",
        grid_lg: "w-full h-full min-w-[21.375rem] min-h-[9.375rem]",
      },
    },
    defaultVariants: {
      intent: "grid",
      size: "grid_lg",
    },
  }
);

interface GridProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gridStyles> {
  icon?: keyof typeof widgets;
  idx?: number;
  widgetType?: widget;
}

const IconDetailDistribute = (
  widget?: widget
): {
  color: string;
  detail: string;
  link?: string;
} => {
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

const Grid = forwardRef<HTMLButtonElement, GridProps>(
  ({ className, size, intent, icon, widgetType, ...props }, ref) => {
    const { color, detail, link } = IconDetailDistribute(widgetType);

    if (detail === "archive" && link) {
      return (
        <Link href={link} className="xlg:col-span-2 xlg:row-span-2">
          <button className={cn(gridStyles({ intent, size }))}>
            <div className="h-full flex flex-col">
              <Icon widget={widgetType} size="m" color={color} />
              <Text
                size="small_content"
                className="flex items-start mt-4 font-semibold"
              >
                {detail}
              </Text>
            </div>
          </button>
        </Link>
      );
    }

    return (
      <a href={link} target="_blank" className="xlg:col-span-2 xlg:row-span-2">
        <button className={cn(gridStyles({ intent, size }))}>
          <div className="h-full flex flex-col">
            <Icon widget={widgetType} size="m" color={color} />
            <Text
              size="small_content"
              className="flex items-start mt-4 font-semibold"
            >
              {detail}
            </Text>
          </div>
        </button>
      </a>
    );
  }
);

export { Grid, gridStyles };
