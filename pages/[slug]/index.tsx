import { allContents, type Content } from "contentlayer/generated";
import { notFound } from "next/navigation";
interface PageProps {
  params: {
    slug: string;
  };
}

// async function getDocFromParams(slug: string) {
//   const doc = allDocuments.find((doc) => doc.slugAsParams === slug);

//   if (!doc) notFound();

//   return doc;
// }

const Page = ({ content }: { content: Content[] }) => {
  console.log(allContents);
  return <div></div>;
};

export default Page;
