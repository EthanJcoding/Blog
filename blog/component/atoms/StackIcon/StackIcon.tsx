interface StackIconProps {
  stacks: { stack: string; color: string }[];
}

const StackIcon = ({ stacks }: StackIconProps) => {
  return (
    <div className="mb-2 flex">
      {stacks.map((el, idx) => (
        <div key={idx}>
          <img
            alt="스택 아이콘"
            src={`https://img.shields.io/badge/${el.stack}-${el.color}?style=for-the-badge&logo=${el.stack}&logoColor=white`}
            width="auto"
            height="auto"
          />
        </div>
      ))}
    </div>
  );
};

export { StackIcon };
