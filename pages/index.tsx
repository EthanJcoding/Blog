import { Grid_Section } from "@/component/organisms/Grid_Section/Grid_Section";
import { MainGrid } from "@/component/molecules/MainGrid/MainGrid";
import { GetStaticProps } from "next";
import { Layout } from "@/component/molecules/Layout/Layout";
import { Profile } from "@/component/molecules/Profile/Profile";

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

  return (
    <Layout>
      <>
        <Profile />
        <section className="">
          <Grid_Section>
            <MainGrid />
          </Grid_Section>
        </section>
      </>
    </Layout>
  );
}

function solution(n, t, m, p) {
  let arr = [];
  let ans = "";

  for (let i = 0; i <= t; i++) {
    arr.push(i.toString(n));
  }

  for (let j = 0; j <= arr.join("").length; j++) {
    if (j % 2 === 0) {
      ans += arr.join("")[j];
    }
  }

  return ans.substring(0, t);
}
