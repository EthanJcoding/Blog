import { NotionDataItem } from "@/hooks/useFetchNotionData/useFetchNotionData";
import { A22_Grid } from "../A22_Grid/A22_Grid";
import { Article } from "../Article/Article";

interface ArchiveGridProps {
  article: NotionDataItem[];
}

const Archive_Grid = ({ article }: ArchiveGridProps) => {
  return (
    <>
      {article.map((el) => (
        <>
          <A22_Grid
            key={el.id}
            tags={el.tags}
            name={el.name}
            createdAt={el.created_at}
            cover={el.thumbnail}
            article={el.article}
          ></A22_Grid>
        </>
      ))}
    </>
  );
};

export { Archive_Grid };
