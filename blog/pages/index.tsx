import { MainGrid } from "@/component/molecules/MainGrid/MainGrid";
import { Profile } from "@/component/molecules/Profile/Profile";

export default function Home() {
  return (
    <>
      <main className="min-full-screen flex flex-col items-center justify-center">
        <div className="min-full-screen flex w-full max-w-[1728px] flex-col">
          <div className="flex min-h-screen w-full flex-1 flex-col items-center">
            <div className="flex h-full w-full max-w-[428px] flex-1 flex-col p-6 py-12 xl:max-w-[1728px] xl:flex-row xl:p-16">
              <Profile />
              <div className="">
                <div className="hidden mb-10 border p-5 rounded-3xl shadow-md xlg:flex justify-center">
                  <img src="https://ghchart.rshah.org/0A4595/EthanJcoding" />
                </div>
                <MainGrid />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
