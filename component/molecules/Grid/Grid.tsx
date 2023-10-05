import React, { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import Image from "next/image";
import { cva, VariantProps } from "class-variance-authority";
import { Text, Icon, StackIcon } from "component/atoms";
import { icons, widgets } from "component/atoms/Icon";
import { useGenerationStore, cn, useIcon } from "services";
import dayjs from "dayjs";

type widget = keyof typeof widgets;

const gridStyles = cva(
  "active:scale-95 hover:bg-hover ease-in-out duration-300 shadow-md border rounded-3xl p-5 ",
  {
    variants: {
      intent: {
        default: "col-span-1 row-span-1 ",
        A12_grid: "col-span-2 row-span-1 ",
        A22_grid: "col-span-2 row-span-2 ",
      },
      size: {
        grid_md:
          "xsm:w-full xsm:h-full xsm:min-w-[150px] xsm:min-h-[150px] w-[11rem] h-[11rem] ",
        grid_lg: "w-full h-full min-w-[21.375rem] min-h-[11rem] ",
        grid_xlg: "xsm:w-full xsm:h-[21.375rem] w-[24.5rem] h-[24.5rem] ",
        grid_flexible: "h-[24.5rem] ",
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
        className={gridStyles({ intent: "A12_grid", size: "grid_lg" })}
        rel="noreferrer"
        target="_blank"
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
            <div className={` text-green-600 text-2xl xlg:text-4xl`}>
              {contents.name}
            </div>
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
        <div className="col-span-2 xlg:col-span-4 h-full w-full flex flex-col xl:flex-row justify-between p-1">
          <Text textColor="content" size="content">
            {contents.name}: {contents.description}
          </Text>
          <Link href={contents.href} rel="noreferrer" target="_blank">
            <Text textColor="onObserver" size="small_content">
              {contents.name} 바로가기 📎
            </Text>
          </Link>
        </div>

        <div
          className={`flex flex-col justify-evenly h-full col-span-2 row-span-2 shadow-md border rounded-3xl p-8 ${
            isFolded
              ? "w-[40.25rem]"
              : "xsm:w-full xsm:h-full w-[24.5rem] h-[24.5rem] font-medium text-md"
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
              : "xsm:w-full xsm:h-full w-[24.5rem] h-[24.5rem] font-medium text-md"
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
        <div className="flex flex-col h-full ">
          <div className="flex justify-center items-center w-full h-52">
            {contents.thumbnailUrl && (
              <Image
                alt={`${contents.title} 이미지`}
                src={contents.thumbnailUrl}
                className="object-fit w-full h-full rounded-[44px]"
                width={200}
                height={100}
              />
            )}
          </div>
          <div className="flex flex-col my-4">
            <Text size="content" font="semi_bold" textColor="content">
              {contents.title}
            </Text>
            <Text size="small_content" textColor="content" className="mt-4">
              {dayjs(contents.publishedAt).format("YYYY.MM.DD")}
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
