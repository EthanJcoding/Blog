import Image from "next/image";
interface StackIconProps {
  stacks?: { stack: string; color: string }[];
}

const StackIcon = ({ stacks }: StackIconProps) => {
  return (
    <div className="flex w-full">
      {stacks &&
        stacks.map((el, idx) => (
          <Image
            key={el.stack + idx}
            alt="스택 아이콘"
            src={`https://img.shields.io/badge/${el.stack}-${el.color}?style=for-the-badge&logo=${el.stack}&logoColor=white`}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        ))}
    </div>
  );
};

export { StackIcon };
