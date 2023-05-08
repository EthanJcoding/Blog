import { Git_Status } from "@/component/atoms/Git_Status/Git_Status";
import { MainGrid } from "@/component/molecules/MainGrid/MainGrid";

export default function Home() {
  return (
    <section className="">
      <Git_Status />
      <MainGrid />
    </section>
  );
}
