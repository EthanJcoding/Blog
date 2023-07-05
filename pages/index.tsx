import { Grid_Section } from "@/component/organisms/Grid_Section/Grid_Section";
import { MainGrid } from "@/component/molecules/MainGrid/MainGrid";
import { GetStaticProps } from "next";
import { Layout } from "@/component/molecules/Layout/Layout";
import { Profile } from "@/component/molecules/Profile/Profile";
import { useState } from "react";

export const getStaticProps: GetStaticProps<any> = async () => {
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=37.4563&lon=126.7052&appid=5fc487fa766ba2f7d88c20652cc61371"
  );
  const json = await res.json();

  const { weather } = json;

  return {
    props: {
      data: weather,
    },
  };
};

export default function Home({ data }: any) {
  const weatherDescription = data[0].description;

  const [isProfileOpened, setProfileOpenend] = useState(true);

  return (
    <Layout>
      <>
        <Profile
          setProfileOpenend={setProfileOpenend}
          isProfileOpened={isProfileOpened}
        />
        <div className="relative xl:w-[824px]">
          <Grid_Section>
            <MainGrid />
          </Grid_Section>
        </div>
      </>
    </Layout>
  );
}
