import { Button, Text } from "@/components/atoms";
import styles from "./HeaderNav.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";

const HeaderNav = () => {
  const cx = classNames.bind(styles);

  return (
    <>
      <div className={cx("logo")}>
        <Link href="/">
          <Text>준일한 블로그 |</Text>
        </Link>
      </div>
      <ul className={cx("menu-lists")}>
        <li className={cx("menu-list")}>
          <Link href="/components">
            <Text>컴포넌트</Text>
          </Link>
        </li>
        <li className={cx("menu-list")}>
          <Link href="/blog">
            <Text>블로깅</Text>
          </Link>
        </li>
        <li className={cx("menu-list")}>
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
