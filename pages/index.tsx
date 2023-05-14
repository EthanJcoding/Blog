import { Grid_Section } from "@/component/organisms/Grid_Section/Grid_Section";
import { MainGrid } from "@/component/molecules/MainGrid/MainGrid";
import { Git_Status } from "@/component/atoms/Git_Status/Git_Status";
export default function Home() {
  return (
    <section>
      <Git_Status />
      <Grid_Section>
        <MainGrid />
      </Grid_Section>
    </section>
  );
}
