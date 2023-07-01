import { Grid } from "../Grid/Grid";

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
        <Grid
          gridType="A22"
          hasThumbnail={true}
          key={el.id}
          tags={el.tags}
          name={el.name}
          createdAt={el.created_at}
          cover={el.thumbnail}
          url={el.url}
        />
      ))}
    </>
  );
};

export { Archive_Grid };
