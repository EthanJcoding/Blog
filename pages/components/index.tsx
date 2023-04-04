import Head from "next/head";
import { Layout } from "@/components/templates";

export default function Index() {
  return (
    <>
      <Head>
        <title>J-Log</title>
        <meta name="description" content="Junil's 프론트엔드 컴포넌트 모음" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>hi my name is components</div>
      </Layout>
    </>
  );
}
