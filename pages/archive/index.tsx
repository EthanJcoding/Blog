import { ArchiveGrid, Layout } from "component/molecules";
import { GetStaticProps } from "next";
import {
  allContents,
  type Content as ContentType,
} from "contentlayer/generated";
import { Archive_Section } from "component/organisms";

export const getStaticProps: GetStaticProps = async () => {
  return { props: { allContents } };
};
export default function archive({
  allContents,
}: {
  allContents: ContentType[];
}) {
  return (
    <Layout>
      <Archive_Section>
        <ArchiveGrid contents={allContents} />
      </Archive_Section>
    </Layout>
  );
}
