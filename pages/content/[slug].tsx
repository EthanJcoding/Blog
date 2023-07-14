import {
  allContents,
  type Content as ContentType,
} from "contentlayer/generated";
import { Layout } from "component/molecules/Layout/Layout";
import { MdxComponent } from "component/molecules/MdxComponent/MdxComponent";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const content: ContentType | undefined = allContents.find(
    (content) => content.slug === params.slug
  );

  return { props: { content } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allContents.map((content) => ({
      params: { slug: content.slug },
    })),
    fallback: false,
  };
};

const ContentPage = ({ content }: { content: ContentType }) => {
  return (
    <>
      <div>
        <Layout>
          <MdxComponent code={content.body.code} />
        </Layout>
      </div>
    </>
  );
};

export default ContentPage;
