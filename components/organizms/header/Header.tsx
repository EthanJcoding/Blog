import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Text, Button } from "@/components/atoms";
import Link from "next/link";
import { HeaderNav } from "@/components/molecules";

const Header = () => {
  const cx = classNames.bind(styles);
  return (
    <header className={cx("header")}>
      <HeaderNav />
    </header>
  );
};

export default Header;
