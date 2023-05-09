import { Button } from "@/component/atoms/Button/Button";
import { StackIcon } from "@/component/atoms/StackIcon/StackIcon";

interface Article {
  id: string;
  name: string;
  tags: string[];
  created_at: string;
}

interface ArchiveGridProps {
  article: Article;
}

const Archive_Grid = ({ article }: ArchiveGridProps) => {
  const { tags } = article;

  return <div></div>;
};

export { Archive_Grid };
