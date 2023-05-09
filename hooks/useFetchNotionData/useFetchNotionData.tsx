// import axios from "axios";

// const useFetchNotionData = async () => {
//   try {
//     const res = await axios.get(
//       `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_ID}`,
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_SECRET}`,
//           "Notion-Version": "2022-06-28",
//         },
//       }
//     );

//     return res.data;
//   } catch (err) {
//     return err;
//   }
// };

// export { useFetchNotionData };
