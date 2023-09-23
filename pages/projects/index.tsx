import { PrjoectsGrid, Layout } from "component/molecules";
import { Projects_Section } from "component/organisms";

export default function archive() {
  return (
    <Layout>
      <Projects_Section>
        <PrjoectsGrid />
      </Projects_Section>
    </Layout>
  );
}
