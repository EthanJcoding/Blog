import { gridStyles } from "../Grid/Grid";
import { StackIcon } from "@/component/atoms/StackIcon/StackIcon";
import Image from "next/image";
import { Text } from "@/component/atoms/Text/Text";
import { getParsedDate } from "@/utils/getParsedDate";

interface A22_GridProps {
  tags?: { stack: string; color: string }[];
  name?: string;
  createdAt?: string;
  cover?: string;
  url?: string;
}

const A22_Grid = ({ tags, name, createdAt, cover, url }: A22_GridProps) => {
  if (tags && name && createdAt && cover && url) {
    return (
      <a
        href={url}
        target="_blank"
        className={gridStyles({ intent: "A22_grid", size: "grid_xlg" })}
      >
        <div className="flex flex-col justify-evenly h-full min-h-[342px]">
          <div className="flex justify-center items-center rounded-3xl w-full h-52">
            {cover ? (
              <Image
                alt={`${name} 이미지`}
                src={cover}
                className="w-full h-full object-none p-2"
                width={200}
                height={100}
                priority={true}
              />
            ) : null}
          </div>
          <div className="flex flex-col my-4">
            <Text size="content" font="semi_bold" textColor="content">
              {name}
            </Text>
            <Text size="small_content" textColor="content">
              {getParsedDate(createdAt)}
            </Text>
          </div>
          <div className="flex justify-between items-center">
            <StackIcon stacks={tags} />
          </div>
        </div>
      </a>
    );
  } else
    return (
      <a
        href={url}
        target="_blank"
        className={gridStyles({ intent: "A22_grid", size: "grid_xlg" })}
      >
        <div className="flex flex-col justify-evenly h-full min-h-[342px]">
          <div className="flex justify-center items-center rounded-3xl w-full h-52"></div>
        </div>
      </a>
    );
};

export { A22_Grid };
