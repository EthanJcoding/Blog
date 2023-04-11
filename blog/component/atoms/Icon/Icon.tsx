import * as icons from "./index";
import React from "react";

interface IconProps {
  icon: keyof typeof icons;
  size?: "xl" | "l" | "m" | "s" | "xs";
  color?: "black" | "gray" | "green" | "lightgray" | "red" | "white";
}

const Icon = ({ icon, size = "m", color = "black" }: IconProps) => {
  const SVG = icons[icon];

  return (
    <span className={"icon-container"}>
      <SVG />
    </span>
  );
};

export default React.memo(Icon);
