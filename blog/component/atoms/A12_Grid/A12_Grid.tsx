import localFont from "next/font/local";
import Image from "next/image";
import gomsLogo from "../../../public/gomsLogo.png";
import codeTechLogo from "../../../public/codeTechLogo.png";
import { Button } from "../Button/Button";

const goms_font = localFont({
  src: "../../../public/font/designhouseOTFLight00.woff",
});

interface A12_GridProps {
  stacks: { stack: string; color: string }[];
  project: string;
}

const A12_Grid = ({ stacks, project }: A12_GridProps) => {
  const StackIcon = ({ ...props }) => {
    return (
      <div {...props}>
        {stacks.map((el, idx) => (
          <div key={idx}>
            <img
              alt="스택 아이콘"
              src={`https://img.shields.io/badge/${el.stack}-${el.color}?style=for-the-badge&logo=${el.stack}&logoColor=white`}
            />
          </div>
        ))}
      </div>
    );
  };

  if (project === "코드테크") {
    return (
      <Button intent="big_grid" size="grid_lg">
        <a href="https://codetech.nworld.dev/" target="_blank">
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-center items-center rounded-3xl shadow border p-4 w-full h-16 xlg:h-20 bg-codeTech_grid">
              <Image src={codeTechLogo} alt="코드테크 로고" className="w-36" />
            </div>
            <div className="">
              <StackIcon className="mb-2 flex" />
            </div>
          </div>
        </a>
      </Button>
    );
  } else
    return (
      <Button intent="big_grid" size="grid_lg">
        <a
          href="http://gardenmusic.s3-website.ap-northeast-2.amazonaws.com/"
          target="_blank"
        >
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-center items-center rounded-3xl shadow border p-4 w-full h-16 xlg:h-20 bg-goms_grid">
              <Image src={gomsLogo} alt="악보의정원 로고" className="w-5" />
              <div
                className={`${goms_font.className} text-green-600 text-2xl xlg:text-4xl`}
              >
                {project}
              </div>
            </div>
            <div className="">
              <StackIcon className="mb-2 flex" />
            </div>
          </div>
        </a>
      </Button>
    );
};

export { A12_Grid };
