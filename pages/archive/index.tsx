import { GetStaticProps } from "next";
import { Grid_Section } from "@/component/organisms/Grid_Section/Grid_Section";
import { useFetchNotionData } from "@/hooks";
import { Archive_Grid } from "@/component/molecules/Archive_Grid/Archive_Grid";

interface Props {
  data: NotionDataItem[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return await useFetchNotionData();
};

export default function Archive({ data }: Props) {
  return (
    <section>
      <Grid_Section>
        <Archive_Grid article={data} />
      </Grid_Section>
    </section>
  );
}
