import { ArchiveGrid, Layout } from "component/molecules";
import { Archive_Section } from "component/organisms";

export default function archive({}) {
  return (
    <Layout>
      <Archive_Section>
        <ArchiveGrid />
      </Archive_Section>
    </Layout>
  );
}
