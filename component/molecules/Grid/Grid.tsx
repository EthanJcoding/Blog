import React, { ButtonHTMLAttributes } from "react";
import { cn, useIcon } from "services";
import { Text, Icon, StackIcon } from "component/atoms";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import localFont from "next/font/local";
import { icons, widgets } from "component/atoms/Icon";

type widget = keyof typeof widgets;

const gridStyles = cva(
  "active:scale-95 hover:bg-hover ease-in-out duration-300",
  {
    variants: {
      intent: {
        grid: "col-span-1 row-span-1 shadow-md border rounded-3xl",
        A12_grid: "col-span-2 row-span-1 shadow-md border rounded-3xl p-5 ",
        A22_grid:
          "col-span-2 row-span-2 shadow-md border rounded-3xl p-5 2xlg:col-span-2",
        Flex_grid:
          "col-span-2 row-span-1 shadow-md border rounded-3xl p-5 3xlg:col-span-1",
      },
      size: {
        grid_md:
          "w-full h-full xsm:min-w-[9.438rem] xsm:min-h-[9.438rem] min-w-[11rem] min-h-[11rem] text-sm font-medium p-5",
        grid_lg:
          "w-full h-full xsm:min-w-[21.375rem] min-w-[21.375rem] min-h-[11rem] font-medium text-md p-5",
        grid_xlg:
          "xsm:min-w-[21.375rem] xsm:min-h-[21.375rem] min-w-[24.5rem] min-h-[24.5rem] font-medium text-md p-5",
        grid_flexible:
          "font-medium text-md p-5 3xlg:min-w-[302px] w-full h-full",
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
  hasThumbnail: boolean;
  gridType: "default" | "A12" | "A22";
  contents: any | widget;
}

const goms_font = localFont({
  src: "../../../public/font/designhouseOTFLight00.woff",
});

const Grid = ({
  hasThumbnail,
  gridType,
  contents,
  intent,
  size,
}: GridProps) => {
  const { color, detail, link } = useIcon(contents);

  const renderDefaultGrid = () => {
    if (hasThumbnail) {
      return (
        <Link href={link} className="xlg:col-span-1 xlg:row-span-1">
          <button
            className={cn(gridStyles({ intent: "grid", size: "grid_md" }))}
          >
            <div className="h-full flex flex-col">
              <Icon widget={contents} size="m" color={color} />
              <Text
                size="small_content"
                className="flex items-start mt-4 font-semibold"
                textColor="content"
              >
                {detail}
              </Text>
            </div>
          </button>
        </Link>
      );
    } else {
      return (
        <Link
          href={`/content/${contents.slug}`}
          className={cn(gridStyles({ intent: "grid", size: "grid_md" }))}
        >
          <div className="w-full h-full">
            <div className="h-full flex flex-col justify-between">
              <Image
                src={contents.thumbnailUrl}
                width={40}
                height={40}
                alt={contents.description}
              />
              <Text
                size="small_content"
                className="flex items-start mt-4 font-semibold"
                textColor="content"
              >
                {contents.title}
              </Text>
            </div>
          </div>
        </Link>
      );
    }
  };

  const renderA12Grid = () => {
    if (hasThumbnail) {
      return (
        <Link
          href={contents.href}
          target="_blank"
          className={gridStyles({ intent: "A12_grid", size: "grid_lg" })}
          rel="noreferrer"
        >
          <div className="flex flex-col justify-between h-full min-h-[108px]">
            <div className="flex justify-center items-center rounded-3xl shadow border p-4 w-full h-16 xlg:h-20 bg-codeTech_grid">
              <Image src={contents.image} alt="project logo" />
              {contents.name === "악보의 정원" ? (
                <div
                  className={`${goms_font.className} text-green-600 text-2xl xlg:text-4xl`}
                >
                  {contents.name}
                </div>
              ) : null}
            </div>
            <div className="">
              <StackIcon stacks={contents.stacks} />
            </div>
          </div>
        </Link>
      );
    } else {
      return (
        <Link
          href={`/content/${contents.slug}`}
          target="_blank"
          className={gridStyles({ intent: "A12_grid", size: "grid_lg" })}
          rel="noreferrer"
        >
          <div>
            <div className="h-full flex flex-col">
              <Icon widget={contents} size="m" color={color} />
              <Text
                size="small_content"
                className="flex items-start mt-4 font-semibold"
              >
                {contents.title}
              </Text>
            </div>
          </div>
        </Link>
      );
    }
  };

  const renderA22Grid = () => {
    if (hasThumbnail) {
      return (
        <Link
          href={`/content/${contents.slug}`}
          className={gridStyles({ intent, size })}
        >
          <div className="flex flex-col justify-evenly h-full min-h-[342px]">
            <div className="flex justify-center items-center rounded-3xl w-full h-52">
              {contents.thumbnailUrl ? (
                <Image
                  alt={`${contents.title} 이미지`}
                  src={contents.thumbnailUrl}
                  className="w-full h-full object-none p-2"
                  width={200}
                  height={100}
                />
              ) : null}
            </div>
            <div className="flex flex-col my-4 text-center">
              <Text size="small_content" font="semi_bold" textColor="content">
                {contents.title}
              </Text>
            </div>
          </div>
        </Link>
      );
    } else {
      return (
        <Link
          href={link}
          target="_blank"
          className={gridStyles({ intent, size })}
          rel="noreferrer"
        >
          <div className="h-full flex flex-col">
            <Text size="small_content" font="semi_bold" textColor="content">
              {contents.title}
            </Text>
          </div>
        </Link>
      );
    }
  };

  switch (gridType) {
    case "default":
      return renderDefaultGrid();
    case "A12":
      return renderA12Grid();
    case "A22":
      return renderA22Grid();
    default:
      return null;
  }
};

export default Grid;
