import React from "react";
import { useEffect, useState } from "react";
import { useObserver } from "services";
import { Text } from "component/atoms";
function setHeadingIds(content: string) {
  const titles = content.split("\n").filter((t) => t.includes("# "));
  const headingElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

  for (let i = 0; i < headingElements.length; i++) {
    const headingElement = headingElements[i]; // Get the heading element
    if (headingElement) {
      const headingText = headingElement.textContent?.trim() || ""; // Use optional chaining to avoid null/undefined
      const id = headingText;

      headingElement.setAttribute("id", id);
    }
  }
  const result = titles
    .filter((str) => str[0] === "#")
    .map((item) => {
      // #의 갯수에 따라 제목의 크기가 달라지므로 갯수를 센다.
      let count = item.match(/#/g)?.length;
      if (count) {
        // 갯수에 따라 목차에 그릴때 들여쓰기 하기위해 *10을 함.
        count = count * 10;
      }

      // 제목의 내용물만 꺼내기 위해 '# '을 기준으로 나누고, 백틱과 공백을 없애주고 count와 묶어서 리턴
      return { title: item.split("# ")[1].replace(/`/g, "").trim(), count };
    });

  return result;
}

interface TableItemProps {
  item: { title: string; count: number | undefined };
  activeId: string;
}

const TableOfContentItem = React.memo(({ item, activeId }: TableItemProps) => {
  if (item?.count && item.count <= 30 && item?.title) {
    return (
      <a
        href={`#${item.title}`}
        className={`${item.count === 30 ? "ml-2 py-2 pl-3 border-l" : "py-2"}`}
      >
        <Text
          size={item.count === 20 ? "medium_content" : "small_content"}
          font="semi_bold"
          textColor={activeId === item.title ? "onObserver" : "toc"}
        >
          {item.title}
        </Text>
      </a>
    );
  }
  return null;
});

TableOfContentItem.displayName = "TableOfContentItem";

const TableOfContent = ({ content }: { content: string }) => {
  const [activeId, setActiveId] = useState("");
  const [table, setTable] = useState<
    {
      title: string;
      count: number | undefined;
    }[]
  >([]);

  useEffect(() => {
    const result = setHeadingIds(content);
    setTable(result);
  }, [content]);

  useObserver(setActiveId, content);

  return (
    <>
      {table.map((item, idx) => (
        <React.Fragment key={item.title + idx}>
          <TableOfContentItem item={item} activeId={activeId} />
        </React.Fragment>
      ))}
    </>
  );
};

export default TableOfContent;
