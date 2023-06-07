import { Grid_Section } from "@/component/organisms/Grid_Section/Grid_Section";
import { Archive_Grid } from "@/component/molecules/Archive_Grid/Archive_Grid";
import { useFetchNotionData } from "@/hooks";
import { Layout } from "@/component/molecules/Layout/Layout";
import { Profile } from "@/component/molecules/Profile/Profile";

interface Props {
  data:
    | {
        id: any;
        type: string;
        thumbnail: any;
        name: any;
        tags: any;
        created_at: any;
        url: any;
      }[]
    | undefined;
}

export const getStaticProps = async (): Promise<{ props: Props }> => {
  const data = await useFetchNotionData();
  return {
    props: {
      data: data,
    },
  };
};

export default function Archive({ data }: Props) {
  if (data)
    return (
      <Layout>
        <>
          <Profile />
          <section>
            <Grid_Section>
              <Archive_Grid article={data} />
            </Grid_Section>
          </section>
        </>
      </Layout>
    );
}
