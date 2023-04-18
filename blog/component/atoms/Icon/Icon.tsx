import * as icons from "./index";
import React, { useRef, useEffect } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/twMerge";

interface IconProps {
  icon: keyof typeof icons;
  size?: string;
  color?: string;
}

const Icon = ({ icon, size, color }: IconProps) => {
  const SVG = icons[icon];

  size === "m" ? (size = "48") : (size = "15");

  return (
    <span className={"icon-container"}>
      <SVG size={size} />
    </span>
  );
};

export default React.memo(Icon);
