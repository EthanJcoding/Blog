import axios from "axios";
import { useNotionToMd } from "../useNotionToMd/useNotionToMd";

interface Property {
  title: {
    plain_text: string;
  }[];
  multi_select: {
    name: string;
  }[];
}

interface Result {
  id: string;
  properties: {
    Name: Property;
    Tags: Property;
  };
  created_time: string;
  cover: {
    file: {
      url: string;
    };
  };
}

export interface NotionDataItem {
  id: string;
  name: string;
  tags: { stack: string; color: string }[];
  created_at: string;
  thumbnail: string;
  article: string;
}

const useFetchNotionData = async () => {
  try {
    const res = await axios.post(
      `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_ID}/query`,
      {},
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_SECRET}`,
          "Notion-Version": "2022-06-28",
        },
      }
    );

    const data: NotionDataItem[] = await Promise.all(
      res.data.results.map(async (item: Result) => {
        const thumbnail = item.cover?.file?.url || "";
        const id = item.id;
        const article = await useNotionToMd(id);

        return {
          id,
          type: "blog",
          article: article.parent,
          thumbnail,
          name: item.properties.Name.title[0].plain_text,
          tags: item.properties.Tags.multi_select.map((tag) => ({
            stack: tag.name,
            color: "149ECA",
          })),
          created_at: item.created_time,
        };
      })
    );

    return {
      props: {
        data,
      },
    };
  } catch (err: any) {
    console.log(err.response);
    return {
      props: {
        data: [],
      },
    };
  }
};

export { useFetchNotionData };
