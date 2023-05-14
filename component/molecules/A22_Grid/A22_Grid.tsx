import { gridStyles } from "../Grid/Grid";
import { StackIcon } from "@/component/atoms/StackIcon/StackIcon";
import Link from "next/link";
import Image from "next/image";
import { Text } from "@/component/atoms/Text/Text";

interface A22_GridProps {
  tags: { stack: string; color: string }[];
  name: string;
  createdAt: string;
  cover: string;
}

const A22_Grid = ({ tags, name, createdAt, cover }: A22_GridProps) => {
  console.log(cover);
  return (
    <Link
      href="/"
      className={gridStyles({ intent: "A22_grid", size: "grid_lg" })}
    >
      <div className="flex flex-col justify-between h-full min-h-[108px]">
        <div className="flex justify-center items-center rounded-3xl shadow border p-4 w-full h-16 xlg:h-20 bg-goms_grid">
          <div className="w-10">
            <img src={cover} />
          </div>
        </div>
        <div className="flex">
          <Text size="small_content">{name}</Text>
          <Text size="small_content">{createdAt}</Text>
        </div>
        <div className="">
          <StackIcon stacks={tags} />
        </div>
      </div>
    </Link>
  );
};

export { A22_Grid };
