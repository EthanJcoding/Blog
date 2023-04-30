import { icons, widgets } from "./index";
import React from "react";

interface IconProps {
  icon?: keyof typeof icons;
  widget?: keyof typeof widgets;
  size?: string;
  color?: string;
}

const Icon = ({ icon, widget, size, color }: IconProps) => {
  const computedSize = size === "m" ? "48" : "15";

  if (icon) {
    const SVG = icons[icon];

    return (
      <span className={"icon-container"}>
        <SVG size={computedSize} color={color} />
      </span>
    );
  }

  if (widget) {
    const Widget = widgets[widget];
    return color === "instagram" ? (
      <span className={"icon-container"}>
        <Widget
          size={computedSize}
          className="text-transparent bg-gradient-to-tr from-red-800 via-purple-400 to-violet-700"
        />
      </span>
    ) : (
      <span className={"icon-container"}>
        <Widget size={computedSize} color={color} />
      </span>
    );
  }

  return null;
};

export { Icon };
