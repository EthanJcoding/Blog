import { icons, widgets } from ".";
import React from "react";

interface IconProps {
  icon?: keyof typeof icons;
  widget?: keyof typeof widgets;
  size?: "sm" | "m" | "lg";
  color?: string;
}

const Icon = ({ icon, widget, size = "m", color, ...props }: IconProps) => {
  const computedSize = (size: "sm" | "m" | "lg" | undefined) => {
    if (size === "sm") return 24;
    if (size === "m") return 36;
    if (size === "lg") return 48;
  };

  if (icon) {
    const SVG = icons[icon];

    return (
      <span className={"icon-container"} {...props}>
        <SVG size={computedSize(size)} color={color} />
      </span>
    );
  }

  if (widget) {
    const Widget = widgets[widget];
    return color === "instagram" ? (
      <div
        style={{
          padding: "6px",
          width: "48px",
          height: "48px",
          background:
            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
          borderRadius: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        {...props}
      >
        <Widget style={{ color: "white", fontSize: "48px" }} />
      </div>
    ) : (
      <span className={"icon-container"} {...props}>
        <Widget size={computedSize(size)} color={color} />
      </span>
    );
  }

  return null;
};

export { Icon };
