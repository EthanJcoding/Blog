import { Client } from "@notionhq/client";

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
  url: string;
}

const useFetchNotionData = async () => {
  const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_SECRET });

  try {
    if (process.env.NEXT_PUBLIC_NOTION_ID) {
      const response = await notion.databases.query({
        database_id: process.env.NEXT_PUBLIC_NOTION_ID,
      });

      const { results } = response;

      const data = results.map((el: Result) => {
        const thumbnail = el.cover?.file?.url || "";

        return {
          id: el.id,
          type: "blog",
          thumbnail,
          name: el.properties.Name.title[0].plain_text,
          tags: el.properties.Tags.multi_select.map((tag) => ({
            stack: tag.name,
            color: "149ECA",
          })),
          created_at: el.created_time,
          url: el.url,
        };
      });
      return {
        props: {
          data,
        },
      };
    }
  } catch (err) {
    console.log(err);
    return {
      props: {
        data: [],
      },
    };
  }
};

export { useFetchNotionData };
