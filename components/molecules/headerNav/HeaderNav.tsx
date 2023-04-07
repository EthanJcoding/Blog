import { Button, Text } from "@/components/atoms";
import Link from "next/link";

const HeaderNav = () => {
  return (
    <>
      <div className="text-3xl font-bold underline">
        <Link href="/">
          <Text>준일한 블로그 |</Text>
        </Link>
      </div>
      <ul className="text-3xl font-bold underline">
        <li className="text-3xl font-bold underline">
          <Link href="/components">
            <Text>컴포넌트</Text>
          </Link>
        </li>
        <li className="text-3xl font-bold underline">
          <Link href="/blog">
            <Text>블로깅</Text>
          </Link>
        </li>
        <li className="text-3xl font-bold underline">
          <Link href="/lab">
            <Text>실험실</Text>
          </Link>
        </li>
        <li>hi</li>
      </ul>
    </>
  );
};

export default HeaderNav;
