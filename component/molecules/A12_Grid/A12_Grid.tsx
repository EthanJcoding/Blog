import localFont from "next/font/local";
import Image from "next/image";
import gomsLogo from "../../../public/gomsLogo.png";
import codeTechLogo from "../../../public/codeTechLogo.png";
import { StackIcon } from "../../atoms/StackIcon/StackIcon";
import { gridStyles } from "../Grid/Grid";
const goms_font = localFont({
  src: "../../../public/font/designhouseOTFLight00.woff",
});

interface A12_GridProps {
  stacks: { stack: string; color: string }[];
  project: string;
}

const A12_Grid = ({ stacks, project }: A12_GridProps) => {
  if (project === "코드테크") {
    return (
      <a
        href="https://codetech.nworld.dev/"
        target="_blank"
        className={gridStyles({ intent: "big_grid", size: "grid_lg" })}
      >
        <div className="flex flex-col justify-between h-full min-h-[108px]">
          <div className="flex justify-center items-center rounded-3xl shadow border p-4 w-full h-16 xlg:h-20 bg-codeTech_grid">
            <Image src={codeTechLogo} alt="코드테크 로고" className="w-36" />
          </div>
          <div className="">
            <StackIcon stacks={stacks} />
          </div>
        </div>
      </a>
    );
  } else
    return (
      <a
        href="http://gardenmusic.s3-website.ap-northeast-2.amazonaws.com/"
        target="_blank"
        className={gridStyles({ intent: "big_grid", size: "grid_lg" })}
      >
        <div className="flex flex-col justify-between h-full min-h-[108px]">
          <div className="flex justify-center items-center rounded-3xl shadow border p-4 w-full h-16 xlg:h-20 bg-goms_grid">
            <Image src={gomsLogo} alt="악보의정원 로고" className="w-5" />
            <div
              className={`${goms_font.className} text-green-600 text-2xl xlg:text-4xl`}
            >
              {project}
            </div>
          </div>
          <div className="">
            <StackIcon stacks={stacks} />
          </div>
        </div>
      </a>
    );
};

export { A12_Grid };
