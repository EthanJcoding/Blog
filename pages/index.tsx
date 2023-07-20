import { Grid_Section } from "component/organisms/Grid_Section/Grid_Section";
import { MainGrid } from "component/molecules/MainGrid/MainGrid";
import { Layout } from "component/molecules/Layout/Layout";
import { contentsForMainPage } from "services";

export default function Home() {
  return (
    <Layout>
      <>
        <Grid_Section>
          <MainGrid allContents={contentsForMainPage} />
        </Grid_Section>
      </>
    </Layout>
  );
}
