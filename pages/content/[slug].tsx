import {
  allContents,
  type Content as ContentType,
} from "contentlayer/generated";
import { Layout } from "component/molecules/Layout/Layout";
import { MdxComponent } from "component/molecules/MdxComponent/MdxComponent";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Frontmatter from "component/molecules/Frontmatter/Frontmatter";

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;

  const content: ContentType | undefined = allContents.find(
    (content) => content.slug === params?.slug
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
        <Layout
          title={content.title}
          description={content.description}
          image={content.thumbnailUrl}
          tags={content.tags?.join(", ")}
        >
          <div className="flex flex-col border-t">
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
