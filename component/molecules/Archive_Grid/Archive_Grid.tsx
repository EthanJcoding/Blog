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
  key: string;
}

const Archive_Grid = ({ article, key }: ArchiveGridProps) => {
  const { tags } = article;

  console.log(tags);

  const stacks = tags.map((tag) => {
    stack: tag;
  });

  console.log(stacks);

  return <div key={key}></div>;
};

export { Archive_Grid };
