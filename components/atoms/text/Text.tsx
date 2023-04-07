import React from "react";

interface TextProps {
  size?: "xs" | "s" | "m" | "lg" | "xlg" | "txlg";
  weight?: "regular" | "medium" | "semibold" | "bold";
  color?: "black" | "green" | "white" | "blue" | "red" | "gray";
  children: string;
}

function Text({
  size = "m",
  weight = "regular",
  color = "black",
  children,
}: TextProps) {
  return <span className="text-3xl font-bold underline">{children}</span>;
}

export default React.memo(Text);
