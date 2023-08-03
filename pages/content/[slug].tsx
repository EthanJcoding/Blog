import {
  allContents,
  type Content as ContentType,
} from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import {
  Frontmatter,
  Layout,
  MdxComponent,
  TableOfContent,
} from "component/molecules";
import { useRef } from "react";

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
      <Layout
        title={content.title}
        description={content.description}
        image={content.thumbnailUrl}
        tags={content.tags?.join(", ")}
        content={content.body.raw}
      >
        <div className="flex justify-between">
          <div className="flex flex-col">
            <Frontmatter
              title={content.title}
              publishedAt={content.publishedAt}
              tags={content.tags}
            />
            <MdxComponent code={content.body.code} />
          </div>
          <TableOfContent content={content.body.raw} />
        </div>
      </Layout>
    </>
  );
};

export default ContentPage;
