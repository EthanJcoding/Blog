// import { Client } from "@notionhq/client";

// const useFetchNotionData = async () => {
//   const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_SECRET });

//   try {
//     if (process.env.NEXT_PUBLIC_NOTION_ID) {
//       const response = await notion.databases.query({
//         database_id: process.env.NEXT_PUBLIC_NOTION_ID,
//       });

//       const { results } = response;

//       const data = results.map((el: any) => {
//         const thumbnail = el.cover?.file?.url || "";

//         return {
//           id: el.id,
//           type: "blog",
//           thumbnail,
//           name: el.properties.Name.title[0].plain_text,
//           tags: el.properties.Tags.multi_select.map((tag: any) => ({
//             stack: tag.name,
//             color: "149ECA",
//           })),
//           created_at: el.created_time,
//           url: el.url,
//         };
//       });

//       return data;
//     }
//   } catch (err) {
//     console.log(err);
//     return [];
//   }
// };

// export { useFetchNotionData };
