import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/twMerge";
import { icons, widgets } from "../Icon/index";
import { Icon } from "../Icon/Icon";
const buttonStyles = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium w-full",
  {
    variants: {
      intent: {
        default: "bg-slate-900 text-white hover:bg-slate-700",
        secondary: "bg-slate-700",
        outline: "bg-transparent border border-slate-200 hover:bg-slate-100",
        iconButton: "border rounded-3xl flex-col p-6",
        github_Follow: "bg-gray-200 ",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        extra_sm: "h-6",
        iconButton: "w-40 h-40",
      },
    },
    defaultVariants: {
      intent: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  icon?: keyof typeof widgets;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, intent, icon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ intent, size, className }))}
        {...props}
      />
    );
  }
);

export { Button, buttonStyles };
