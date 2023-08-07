import { Icon, Text, buttonStyles } from "component/atoms";
import { useContentNavigator } from "services";
import { useRouter } from "next/router";

const ContentNavigator = ({ publishedAt }: { publishedAt: string }) => {
  const router = useRouter();
  const { prevDateEl, nextDateEl } = useContentNavigator(publishedAt);
  return (
    <div
      className={`${
        prevDateEl
          ? "flex w-full p-2 py-4 border-t justify-between"
          : "flex w-full p-2 py-4 border-t justify-end"
      } `}
    >
      {prevDateEl && (
        <button
          className={buttonStyles({ intent: "iconWithText", size: "default" })}
          onClick={() => router.push(prevDateEl.slug)}
        >
          <Icon icon="MdArrowBackIosNew" color="#3F3F4A" size="sm" />
          <Text textColor="content" size="small_content">
            {prevDateEl.title}
          </Text>
        </button>
      )}
      {nextDateEl && (
        <button
          className={buttonStyles({ intent: "iconWithText", size: "default" })}
          onClick={() => router.push(nextDateEl.slug)}
        >
          <Text textColor="content" size="small_content">
            {nextDateEl.title}
          </Text>
          <Icon icon="MdArrowForwardIos" color="#3F3F4A" size="sm" />
        </button>
      )}
    </div>
  );
};

export default ContentNavigator;
