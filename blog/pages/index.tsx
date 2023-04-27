import { IconButton } from "@/component/molecules/IconButton/IconButton";
import { Profile } from "@/component/molecules/Profile/Profile";

export default function Home() {
  return (
    <>
      <div className="h-full w-full flex flex-col py-12 p-6 items-center xl:flex-row xl:p-16">
        <Profile />
        <IconButton />
      </div>
      {/* <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <div className="bg-gray-200 p-4">Box A</div>
        <div className="bg-gray-200 col-span-2 p-4">Box B</div>
        <div className="bg-gray-200 p-4">Box C</div>
        <div className="bg-gray-200 p-4">Box D</div>
        <div className="bg-gray-200 p-4">Box E</div>
        <div className="bg-gray-200 p-4">Box F</div>
      </div> */}
    </>
  );
}
