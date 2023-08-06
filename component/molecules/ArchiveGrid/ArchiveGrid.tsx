import { type Content as ContentType } from "contentlayer/generated";

interface ArchiveGridProps {
  contents: ContentType;
}

const ArchiveGrid = ({ contents }: ArchiveGridProps) => {
  console.log(contents);

  return (
    <div>
      <div>hi</div>
    </div>
  );
};

export default ArchiveGrid;
