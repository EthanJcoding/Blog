import { gridStyles } from "../Grid/Grid";
import { StackIcon } from "@/component/atoms/StackIcon/StackIcon";
import Image from "next/image";
import { Text } from "@/component/atoms/Text/Text";
import { getParsedDate } from "@/utils/getParsedDate";

interface A22_GridProps {
  tags: { stack: string; color: string }[];
  name: string;
  createdAt: string;
  cover: string;
  url: string;
}

const A22_Grid = ({ tags, name, createdAt, cover, url }: A22_GridProps) => {
  return (
    <a
      href={url}
      target="_blank"
      className={gridStyles({ intent: "A22_grid", size: "grid_lg" })}
    >
      <div className="flex flex-col justify-between h-full min-h-[108px]">
        <div className="flex justify-center items-center rounded-3xl w-full h-16 xlg:h-52">
          {cover ? (
            <Image
              alt={`${name} 이미지`}
              src={cover}
              className="w-full h-full object-none py-2"
              width={200}
              height={100}
              priority={true}
            />
          ) : null}
        </div>
        <div className="flex flex-col">
          <Text size="small_content">{name}</Text>
          <Text size="small_content">{getParsedDate(createdAt)}</Text>
        </div>
        <div className="">
          <StackIcon stacks={tags} />
        </div>
      </div>
    </a>
  );
};

export { A22_Grid };
