import { Archive_Grid } from "@/component/molecules/Archive_Grid/Archive_Grid";
import { GetStaticProps } from "next";
import axios from "axios";

type Property = {
  title: Array<{
    plain_text: string;
  }>;
  multi_select: Array<{
    name: string;
  }>;
};

type Result = {
  id: string;
  properties: {
    Name: Property;
    Tags: Property;
  };
  created_time: string;
};

type Props = {
  data: Array<{
    id: string;
    properties: {
      Name: Property;
      tags: Property;
    };
    name: string;
    tags: string[];
    created_at: string;
  }>;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  let data;
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

    data = res.data.results.map((item: Result) => ({
      id: item.id,
      name: item.properties.Name.title[0].plain_text,
      tags: item.properties.Tags.multi_select.map((tag) => tag.name),
      created_at: item.created_time,
    }));
  } catch (err: any) {
    console.log(err.response);
  }
  return {
    props: {
      data,
    },
  };
};

export default function Archive({ data }: Props) {
  return (
    <section>
      {data.map((article) => (
        <Archive_Grid key={article.id} article={article} />
      ))}
    </section>
  );
}
