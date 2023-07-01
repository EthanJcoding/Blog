import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../../utils/twMerge";
import { widgets, icons } from "../../atoms/Icon/index";
import { Icon } from "../../atoms/Icon/Icon";
import { Text } from "../../atoms/Text/Text";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import { StackIcon } from "@/component/atoms/StackIcon/StackIcon";
import { useRouter } from "next/router";

type widget = keyof typeof widgets;

const gridStyles = cva(
  "active:scale-95 hover:bg-hover ease-in-out duration-300",
  {
    variants: {
      intent: {
        grid: "shadow-md border rounded-3xl",
        A12_grid: "col-span-2 row-span-1 shadow-md border rounded-3xl p-5 ",
        A22_grid: "col-span-2 row-span-2 shadow-md border rounded-3xl p-5 ",
      },
      size: {
        grid_md:
          "xl:w-[11rem] xl:h-[11rem] min-w-[10.625rem] min-h-[10.625rem] text-sm font-medium p-5",
        grid_lg: "min-w-[21.375rem] min-h-[11rem] font-medium text-md p-5",
        grid_xlg:
          "xl:w-[24.5rem] xl:h-[24.5rem] min-w-[23.25rem] min-h-[23.25rem] font-medium text-md p-5",
      },
      theme: {
        default: "",
        content: "bg-cyan-700",
      },
    },
    defaultVariants: {
      intent: "grid",
      size: "grid_lg",
      theme: "default",
    },
  }
);

interface GridProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gridStyles> {
  icon?: keyof typeof widgets | keyof typeof icons;
  idx?: number;
  widgetType?: widget;
  hasThumbnail: boolean;
  gridType: "default" | "A12" | "A22";
  contents?: any;
}

const IconDetailDistribute = (
  widget?: widget
): {
  color: string;
  detail: string;
  link: string;
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
  (
    {
      size,
      intent,
      icon,
      widgetType,
      children,
      hasThumbnail,
      gridType,
      contents,
    },
    ref
  ) => {
    const { color, detail, link } = IconDetailDistribute(widgetType);

    const router = useRouter();
    const query = router.pathname;
    const userInArchive = query === "/archive";

    switch (gridType) {
      case "default":
        if (hasThumbnail) {
          return (
            <Link href={link} className="xlg:col-span-1 xlg:row-span-1">
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
        } else
          return (
            <a
              href={link}
              target="_blank"
              className="xlg:col-span-2 xlg:row-span-2"
            >
              <button className={cn(gridStyles({ intent, size }))}>
                <Text
                  size="small_content"
                  className="flex items-start mt-4 font-semibold"
                >
                  {detail}
                </Text>
              </button>
            </a>
          );
      case "A12":
        if (hasThumbnail) {
          return (
            <a
              href={contents.href}
              target="_blank"
              className={gridStyles({ intent: "A12_grid", size: "grid_lg" })}
            >
              <div className="flex flex-col justify-between h-full min-h-[108px]">
                <div className="flex justify-center items-center rounded-3xl shadow border p-4 w-full h-16 xlg:h-20 bg-codeTech_grid">
                  <Image src={contents.image} alt="project logo" />
                </div>
                <div className="">
                  <StackIcon stacks={contents.stacks} />
                </div>
              </div>
            </a>
          );
        } else
          return (
            <a
              href={link}
              target="_blank"
              className="xlg:col-span-2 xlg:row-span-2"
            >
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
      case "A22":
        if (hasThumbnail) {
          return (
            <a
              href={contents.url}
              target="_blank"
              className={gridStyles({ intent: "A22_grid", size: "grid_xlg" })}
            >
              <div className="flex flex-col justify-evenly h-full min-h-[342px]">
                <div className="flex justify-center items-center rounded-3xl w-full h-52">
                  {contents.thumbnail ? (
                    <Image
                      alt={`${contents.name} 이미지`}
                      src={contents.thumbnail}
                      className="w-full h-full object-none p-2"
                      width={200}
                      height={100}
                      priority={true}
                    />
                  ) : null}
                </div>
                <div className="flex flex-col my-4">
                  <Text size="content" font="semi_bold" textColor="content">
                    {contents.name}
                  </Text>
                </div>
              </div>
            </a>
          );
        } else
          return (
            <a
              href={link}
              target="_blank"
              className={gridStyles({ intent: "A22_grid", size: "grid_xlg" })}
            >
              <button>
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
      default:
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
  }
);

export { Grid, gridStyles };
