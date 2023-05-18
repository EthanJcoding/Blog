import { A22_Grid } from "../A22_Grid/A22_Grid";

interface ArchiveGridProps {
  article: {
    id: string;
    tags: { stack: string; color: string }[];
    name: string;
    created_at: string;
    thumbnail: string;
    url: string;
  }[];
}

const Archive_Grid = ({ article }: ArchiveGridProps) => {
  return (
    <>
      {article.map((el) => (
        <A22_Grid
          key={el.id}
          tags={el.tags}
          name={el.name}
          createdAt={el.created_at}
          cover={el.thumbnail}
          url={el.url}
        ></A22_Grid>
      ))}
    </>
  );
};

export { Archive_Grid };
