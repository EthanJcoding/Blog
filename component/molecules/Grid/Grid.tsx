import React, { ButtonHTMLAttributes } from "react";
import { cn, useIcon } from "services";
import { Text, Icon, StackIcon } from "component/atoms";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import { icons, widgets } from "component/atoms/Icon";
import { useGenerationStore } from "services";

type widget = keyof typeof widgets;

const gridStyles = cva(
  "active:scale-95 hover:bg-hover ease-in-out duration-300",
  {
    variants: {
      intent: {
        default: "col-span-1 row-span-1 shadow-md border rounded-3xl ",
        A12_grid: "col-span-2 row-span-1 shadow-md border rounded-3xl p-5 ",
        Project_grid: "col-span-2 row-span-2 shadow-md border rounded-3xl p-5 ",
        A22_grid:
          "col-span-2 row-span-2 shadow-md border rounded-3xl p-5 2xlg:col-span-2 ",
        Flex_grid: "col-span-1 row-span-1 shadow-md border rounded-3xl p-5 ",
      },
      size: {
        grid_md:
          "xsm:w-[9.438rem] xsm:h-[9.438rem] w-[11rem] h-[11rem] text-sm font-medium p-5",
        grid_lg:
          "w-full h-full xsm:min-w-[21.375rem] min-w-[21.375rem] min-h-[11rem] font-medium text-md p-5",
        grid_xlg:
          "xsm:w-[21.375rem] xsm:h-[21.375rem] w-[24.5rem] h-[24.5rem] font-medium text-md p-5",
        grid_flexible: "font-medium text-md p-5 h-[24.5rem]",
      },
    },
    defaultVariants: {
      intent: "default",
    },
  }
);

interface GridProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gridStyles> {
  icon?: keyof typeof widgets | keyof typeof icons;
  idx?: number;
  hasThumbnail: boolean;
  gridType: "default" | "A12" | "A22" | "ProjectGrid";
  contents: any | widget;
}

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
      <Link
        href={hasThumbnail ? link : `/content/${contents.slug}`}
        className={cn(gridStyles({ intent: "default", size: "grid_md" }))}
      >
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
              <div className={` text-green-600 text-2xl xlg:text-4xl`}>
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

  const ProjectGrid = () => {
    const { isFolded } = useGenerationStore();
    return (
      <>
        <Text
          className="col-span-2 xlg:col-span-4 h-full w-full text-xl flex flex-col justify-end"
          textColor="content"
          size="content"
        >
          {contents.name}: {contents.description}
        </Text>

        <div
          className={`flex flex-col justify-evenly h-full col-span-2 row-span-2 shadow-md border rounded-3xl p-8 ${
            isFolded
              ? "w-[40.25rem]"
              : "xsm:w-[21.375rem] xsm:h-[21.375rem] w-[24.5rem] h-[24.5rem] font-medium text-md"
          }`}
        >
          {contents.image && (
            <Image
              src={contents.image}
              alt="project logo"
              width={800}
              height={500}
            />
          )}
        </div>

        <div
          className={`flex flex-col justify-evenly h-full col-span-2 row-span-2 shadow-md border rounded-3xl p-8 ${
            isFolded
              ? "max-w-[51.5rem]"
              : "xsm:w-[21.375rem] xsm:h-full w-[24.5rem] h-[24.5rem] font-medium text-md"
          }`}
        >
          <div>
            <Text
              size="medium_content"
              font="semi_bold"
              className="mb-5"
              textColor="content"
            >
              Role and Contribution
            </Text>
            <>
              {contents.scope?.map((spec: string, idx: number) => (
                <Text key={idx} size="small_content" textColor="content">
                  ➡ {spec}
                </Text>
              ))}
            </>
          </div>

          <div>
            <Text
              size="medium_content"
              font="semi_bold"
              className="my-5"
              textColor="content"
            >
              Stacks
            </Text>
            <>
              {contents.spec?.map((spec: string, idx: number) => (
                <Text key={idx} size="small_content" textColor="content">
                  ➡ {spec}
                </Text>
              ))}
            </>
          </div>
        </div>
      </>
    );
  };

  const A22Grid = () => {
    return (
      <Link
        href={contents.href || `/content/${contents.slug}`}
        className={gridStyles({ intent, size })}
      >
        <div className="flex flex-col justify-evenly h-full ">
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
    case "ProjectGrid":
      return <ProjectGrid />;
    case "A22":
      return <A22Grid />;
    default:
      return null;
  }
};

export default Grid;
