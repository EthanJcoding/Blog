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
        <SVG size={computedSize} />
      </span>
    );
  }

  if (widget) {
    const Widget = widgets[widget];

    return (
      <span className={"icon-container"}>
        <Widget size={computedSize} />
      </span>
    );
  }

  return null;
};

export { Icon };
