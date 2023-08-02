import { useState } from "react";
import { useObserver } from "services";

const TableOfContent = ({ content }: { content: string }) => {
  const [activeId, setActiveId] = useState("");

  useObserver(setActiveId, content);
  const titles = content.split(`\n`).filter((t) => t.includes("# "));

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

  return (
    <div className="hidden xlg:block bg-slate-300 ml-10 max-w-[256px] w-full sticky top-16 h-full ">
      {result.map((item, idx) => {
        if (item?.count && item.count <= 30 && item?.title) {
          return (
            <a
              // href에 #title을 주어서 클릭시 해당 위치로 스크롤 이동하도록 구현
              href={`#${item.title}`}
              key={item.title + idx}
            >
              <div>{item.title}</div>
            </a>
          );
        }
      })}
    </div>
  );
};

export default TableOfContent;
