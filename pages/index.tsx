import { Layout, MainGrid } from "component/molecules";
import { Grid_Section } from "component/organisms";

export default function Home() {
  return (
    <Layout>
      <>
        <Grid_Section>
          <MainGrid />
        </Grid_Section>
      </>
    </Layout>
  );
}
