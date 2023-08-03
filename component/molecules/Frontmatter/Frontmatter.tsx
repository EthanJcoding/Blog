import { Text } from "component/atoms";
import dayjs from "dayjs";

interface FrontmatterProps {
  title: string;
  publishedAt: string;
  tags: string[] | undefined;
}

const Frontmatter = ({ title, publishedAt, tags }: FrontmatterProps) => {
  return (
    <div className="text-center border-t xlg:border-none">
      <Text className="mt-4" font="semi_bold" textColor="content" size="title">
        {title}
      </Text>
      {/* dark:text-neutral-500 */}
      <Text className="mt-4" size="small_content" textColor="toc">
        {dayjs(publishedAt).format("YYYY.MM.DD")}
      </Text>
      <div className="mt-4 mb-8 flex flex-wrap justify-center gap-3">
        {/* dark:bg-neutral-800 */}
        {tags?.map((tag, i) => (
          <div key={i} className="rounded-full bg-neutral-200 px-3 py-1">
            <Text size="small_content" textColor="toc">
              {tag}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontmatter;
