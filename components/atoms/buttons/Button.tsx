import styles from "./button.module.scss";
import classNames from "classnames/bind";
import React from "react";
interface ButtonProps {
  children: JSX.Element | string;
  theme?: "primary";
  onClick?: () => void;
}

const Button = ({
  children,
  theme = "primary",
  onClick = undefined,
}: ButtonProps) => {
  const cx = classNames.bind(styles);

  return (
    <button className={cx("default-button", `${theme}`)} onClick={onClick}>
      {children}
    </button>
  );
};

export default React.memo(Button);
