import { gridStyles } from "../Grid/Grid";
import { StackIcon } from "@/component/atoms/StackIcon/StackIcon";
import Link from "next/link";
import Image from "next/image";

interface A22_GridProps {
  tags: { stack: string; color: string }[];
  name: string;
  createdAt: string;
  cover: string;
}

const A22_Grid = ({ tags, name, createdAt, cover }: A22_GridProps) => {
  return (
    <Link
      href="/"
      className={gridStyles({ intent: "big_grid", size: "grid_lg" })}
    >
      <div className="flex flex-col justify-between h-full min-h-[108px]">
        <div className="flex justify-center items-center rounded-3xl shadow border p-4 w-full h-16 xlg:h-20 bg-goms_grid">
          <div className="w-10">
            {/* <Image
              src={cover}
              alt={name}
              fill={false}
              className="object-cover"
            /> */}
          </div>
        </div>
        <div className="">
          <StackIcon stacks={tags} />
        </div>
      </div>
    </Link>
  );
};

export { A22_Grid };
