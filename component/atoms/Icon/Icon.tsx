import { icons, widgets } from "./index";
import React from "react";

interface IconProps {
  icon?: keyof typeof icons;
  widget?: keyof typeof widgets;
  size?: string;
  color?: string;
}

const Icon = ({ icon, widget, size, color, ...props }: IconProps) => {
  const computedSize = size === "m" ? "48" : "36";

  if (icon) {
    const SVG = icons[icon];

    return (
      <span className={"icon-container"} {...props}>
        <SVG size={computedSize} color={color} />
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
        <Widget size={computedSize} color={color} />
      </span>
    );
  }

  return null;
};

export { Icon };
