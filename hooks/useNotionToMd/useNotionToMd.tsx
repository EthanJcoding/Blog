import { NotionToMarkdown } from "notion-to-md";
import { Client } from "@notionhq/client";

const useNotionToMd = async (id: string) => {
  const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_SECRET,
  });

  const n2m = new NotionToMarkdown({ notionClient: notion });

  const mdblocks = await n2m.pageToMarkdown(id);
  const mdString = n2m.toMarkdownString(mdblocks);

  return mdString;
};

export { useNotionToMd };
