import { Grid_Section } from "component/organisms/Grid_Section/Grid_Section";
import { MainGrid } from "component/molecules/MainGrid/MainGrid";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { Layout } from "component/molecules/Layout/Layout";
import {
  allContents,
  type Content as ContentType,
} from "contentlayer/generated";

export const getStaticProps: GetStaticProps = async () => {
  return { props: { allContents } };
};

export default function Home({ allContents }: { allContents: ContentType[] }) {
  return (
    <Layout>
      <>
        <Grid_Section>
          <MainGrid allContents={allContents} />
        </Grid_Section>
      </>
    </Layout>
  );
}
