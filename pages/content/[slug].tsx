import {
  allContents,
  type Content as ContentType,
} from "contentlayer/generated";
import { Layout } from "component/molecules/Layout/Layout";
import { MdxComponent } from "component/molecules/MdxComponent/MdxComponent";
import { GetStaticPaths, GetStaticProps } from "next";
import Frontmatter from "component/molecules/Frontmatter/Frontmatter";

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
          <div className="flex flex-col">
            <Frontmatter
              title={content.title}
              publishedAt={content.publishedAt}
              tags={content.tags}
            />
            <MdxComponent code={content.body.code} />
          </div>
        </Layout>
      </div>
    </>
  );
};

export default ContentPage;
