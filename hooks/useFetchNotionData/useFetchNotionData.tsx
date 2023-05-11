import axios from "axios";

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
}

interface DataItem {
  id: string;
  name: string;
  tags: string[];
  created_at: string;
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

    const data: DataItem[] = res.data.results.map((item: Result) => ({
      id: item.id,
      name: item.properties.Name.title[0].plain_text,
      tags: item.properties.Tags.multi_select.map((tag) => tag.name),
      created_at: item.created_time,
    }));

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
