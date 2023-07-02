import { Grid_Section } from "@/component/organisms/Grid_Section/Grid_Section";
import { useFetchNotionData } from "@/hooks";
import { Layout } from "@/component/molecules/Layout/Layout";
import { Profile } from "@/component/molecules/Profile/Profile";
import { Grid } from "@/component/molecules/Grid/Grid";

interface Props {
  data:
    | {
        id: string;
        type: string;
        thumbnail: string;
        name: string;
        tags: any;
        created_at: string;
        url: string;
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
              <>
                {data.map((el, idx) => (
                  <Grid
                    gridType="A22"
                    hasThumbnail={true}
                    contents={el}
                    key={el.id}
                  />
                ))}
              </>
            </Grid_Section>
          </section>
        </>
      </Layout>
    );
}
