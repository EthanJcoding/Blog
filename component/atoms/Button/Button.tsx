import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/twMerge";
import { widgets, icons } from "../Icon/index";
import { Icon } from "../Icon/Icon";

type widget = keyof typeof widgets;
type icon = keyof typeof icons;

const buttonStyles = cva(
  "active:scale-95 hover:bg-hover ease-in-out duration-200",
  {
    variants: {
      intent: {
        default: "bg-slate-900 text-white hover:bg-slate-700",
        secondary: "bg-slate-700",
        outline: "bg-transparent border border-slate-200 hover:bg-slate-100",
        iconButton: "border rounded-3xl flex-col p-6",
        github_Follow: "bg-gray-200 ",
        transparent: "bg-transparent hover:bg-slate-100",
      },
      size: {
        default: "flex bg-none py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        extra_sm: "h-6",
        iconButton: "w-40 h-40",
      },
    },
    defaultVariants: {
      intent: "transparent",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  icon?: icon;
  idx?: number;
  widgetType?: widget;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      size = "default",
      intent = "default",
      icon,
      widgetType,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ intent, size, className }))}
        {...props}
      >
        {icon && <Icon icon={icon} />}
      </button>
    );
  }
);

export { Button, buttonStyles };
