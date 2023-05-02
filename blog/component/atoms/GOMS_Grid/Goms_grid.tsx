import localFont from "next/font/local";
import Image from "next/image";
import gomsLogo from "../../../public/gomsLogo.png";

const goms_font = localFont({
  src: "../../../public/font/designhouseOTFLight00.woff",
});

const Goms_grid = () => {
  return (
    <div className="w-full h-full col-span-2 row-span-2 border rounded-3xl p-5 shadow-md min-w-[21.375rem] min-h-[21.375rem] order-last xlg:order-first">
      <div className="bg-opacity-50 h-full">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center rounded-3xl shadow-md border p-4 w-28 h-28">
            <Image
              src={gomsLogo}
              alt="악보의정원 로고"
              width="24"
              height="24"
              className="mb-2"
            />
            <div className={`${goms_font.className} text-green-600`}>
              악보의 정원
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Goms_grid };
