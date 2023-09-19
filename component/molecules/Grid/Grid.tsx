import React, { ButtonHTMLAttributes } from "react";
import { cn, useIcon } from "services";
import { Text, Icon, StackIcon } from "component/atoms";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import localFont from "next/font/local";
import { icons, widgets } from "component/atoms/Icon";

type widget = keyof typeof widgets;

const gridStyles = cva("", {
  variants: {
    intent: {
      grid: "col-span-1 row-span-1 shadow-md border rounded-3xl active:scale-95 hover:bg-hover ease-in-out duration-300",
      A12_grid:
        "col-span-2 row-span-1 shadow-md border rounded-3xl p-5 active:scale-95 hover:bg-hover ease-in-out duration-300",
      A14_grid: "col-span-4 row-span-2 p-5 flex justify-between ",
      A22_grid:
        "col-span-2 row-span-2 shadow-md border rounded-3xl p-5 2xlg:col-span-2 active:scale-95 hover:bg-hover ease-in-out duration-300",
      Flex_grid:
        "col-span-1 row-span-1 shadow-md border rounded-3xl p-5 active:scale-95 hover:bg-hover ease-in-out duration-300",
    },
    size: {
      grid_md:
        "w-full h-full xsm:min-w-[9.438rem] xsm:min-h-[9.438rem] min-w-[11rem] min-h-[11rem] text-sm font-medium p-5",
      grid_lg:
        "w-full h-full xsm:min-w-[21.375rem] min-w-[21.375rem] min-h-[11rem] font-medium text-md p-5",
      grid_xlg:
        "xsm:min-w-[21.375rem] xsm:min-h-[21.375rem] min-w-[24.5rem] min-h-[24.5rem] font-medium text-md p-5",
      grid_flexible: "font-medium text-md p-5 w-full h-full",
    },
  },
  defaultVariants: {
    intent: "grid",
  },
});

interface GridProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gridStyles> {
  icon?: keyof typeof widgets | keyof typeof icons;
  idx?: number;
  hasThumbnail: boolean;
  gridType: "default" | "A12" | "A22" | "A14";
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

  const DefaultGrid = () => {
    return (
      <Link href={hasThumbnail ? link : `/content/${contents.slug}`}>
        <button className={cn(gridStyles({ intent: "grid", size: "grid_md" }))}>
          <div className="h-full flex flex-col">
            {hasThumbnail ? (
              <Icon widget={contents} size="m" color={color} />
            ) : (
              <Image
                src={contents.thumbnailUrl}
                width={40}
                height={40}
                alt={contents.description}
              />
            )}
            <Text
              size="small_content"
              className="flex items-start mt-4 font-semibold"
              textColor="content"
            >
              {hasThumbnail ? detail : contents.title}
            </Text>
          </div>
        </button>
      </Link>
    );
  };

  const A12Grid = () => {
    return (
      <Link
        href={contents.href || `/content/${contents.slug}`}
        target="_blank"
        className={gridStyles({ intent: "A12_grid", size: "grid_lg" })}
        rel="noreferrer"
      >
        <div className="flex flex-col justify-between h-full min-h-[108px]">
          <div className="flex justify-center items-center rounded-3xl shadow border p-4 w-full h-16 xlg:h-20 bg-codeTech_grid">
            {contents.image && (
              <Image
                src={contents.image}
                alt="project logo"
                width={500}
                height={500}
              />
            )}
            {contents.name === "악보의 정원" && (
              <div
                className={`${goms_font.className} text-green-600 text-2xl xlg:text-4xl`}
              >
                {contents.name}
              </div>
            )}
          </div>
          <div className="">
            <StackIcon stacks={contents.stacks} />
          </div>
        </div>
      </Link>
    );
  };

  const A14Grid = () => {
    return (
      <div className={gridStyles({ intent: "A14_grid" })}>
        <Link
          href={contents.href || `/content/${contents.slug}`}
          target="_blank"
          rel="noreferrer"
          className="w-2/5"
        >
          <div className="flex justify-between h-full ">
            <div className="flex justify-center items-center rounded-3xl shadow border p-4 w-full ">
              {contents.image && (
                <Image
                  src={contents.image}
                  alt="project logo"
                  width={500}
                  height={500}
                />
              )}
            </div>
          </div>
        </Link>
        <div className="flex rounded-3xl shadow border p-4 w-1/2 flex-col justify-evenly">
          <div>
            <Text size={"medium_content"} font={"semi_bold"}>
              Role and Contribution
            </Text>
            <div>
              <>
                {contents.scope?.map((spec: string, idx: number) => (
                  <Text key={idx} size={"small_content"} textColor={"content"}>
                    {spec}
                  </Text>
                ))}
              </>
            </div>
          </div>

          <div>
            <Text size={"medium_content"} font={"semi_bold"}>
              Stacks
            </Text>
            <>
              {contents.spec?.map((spec: string, idx: number) => (
                <Text key={idx} size={"small_content"} textColor={"content"}>
                  {spec}
                </Text>
              ))}
            </>
          </div>
        </div>
      </div>
    );
  };

  const A22Grid = () => {
    return (
      <Link
        href={contents.href || `/content/${contents.slug}`}
        className={gridStyles({ intent, size })}
      >
        <div className="flex flex-col justify-evenly h-full min-h-[342px]">
          <div className="flex justify-center items-center rounded-3xl w-full h-52">
            {contents.thumbnailUrl && (
              <Image
                alt={`${contents.title} 이미지`}
                src={contents.thumbnailUrl}
                className="w-full h-full object-none p-2"
                width={200}
                height={100}
              />
            )}
          </div>
          <div className="flex flex-col my-4 text-center">
            <Text size="medium_content" font="semi_bold" textColor="content">
              {contents.title}
            </Text>
          </div>
        </div>
      </Link>
    );
  };

  switch (gridType) {
    case "default":
      return <DefaultGrid />;
    case "A12":
      return <A12Grid />;
    case "A14":
      return <A14Grid />;
    case "A22":
      return <A22Grid />;
    default:
      return null;
  }
};

export default Grid;
