import {
  allContents,
  type Content as ContentType,
} from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import {
  ContentNavigator,
  Frontmatter,
  Layout,
  MdxComponent,
  TableOfContent,
} from "component/molecules";

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
    <Layout
      title={content.title}
      description={content.description}
      image={content.thumbnailUrl}
      tags={content.tags?.join(", ")}
    >
      <div className="flex justify-between">
        <div className="flex flex-col w-full ">
          <Frontmatter
            title={content.title}
            publishedAt={content.publishedAt}
            tags={content.tags}
          />
          <MdxComponent code={content.body.code} />
          <ContentNavigator publishedAt={content.publishedAt} />
        </div>
        <div className="h-fit sticky top-16 hidden xlg:flex xlg:flex-col ml-10 max-w-[176px] w-full">
          <TableOfContent content={content.body.raw} />
        </div>
      </div>
    </Layout>
  );
};

export default ContentPage;
