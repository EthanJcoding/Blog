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

    const data: NotionDataItem[] = res.data.results.map((item: Result) => {
      const thumbnail = item.cover?.file?.url || ""; // Get the thumbnail URL

      return {
        type: "blog",
        id: item.id,
        thumbnail, // Assign the thumbnail URL to the "thumbnail" property
        name: item.properties.Name.title[0].plain_text,
        tags: item.properties.Tags.multi_select.map((tag) => ({
          stack: tag.name,
          color: "149ECA",
        })),
        created_at: item.created_time,
      };
    });

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
