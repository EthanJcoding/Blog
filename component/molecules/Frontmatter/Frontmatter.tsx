import dayjs from "dayjs";

interface FrontmatterProps {
  title: string;
  publishedAt: string;
  tags: string[] | undefined;
}

const Frontmatter = ({ title, publishedAt, tags }: FrontmatterProps) => {
  return (
    <div className="text-center">
      <h1 className="mt-4 text-3xl font-bold md:text-4xl">{title}</h1>
      {/* dark:text-neutral-500 */}
      <div className="mt-4 text-sm text-neutral-400">
        {dayjs(publishedAt).format("YYYY.MM.DD")}
      </div>
      <div className="mt-4 mb-8 flex flex-wrap justify-center gap-3 text-xs md:text-sm">
        {/* dark:bg-neutral-800 */}
        {tags?.map((tag, i) => (
          <span key={i} className="rounded-full bg-neutral-200 px-3 py-1">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Frontmatter;
