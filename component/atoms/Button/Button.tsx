import React, { ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "services";
import { Icon } from "..";
import { icons } from "../Icon";

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
        iconWithText: "flex items-center rounded-xl hover:bg-slate-200",
      },
      size: {
        default: "flex bg-none py-2 px-4",
        sm: "h-full p-2 rounded-md",
        extra_sm: "h-6",
        iconButton: "",
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
}

const Button = ({ className, size, intent, icon, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonStyles({ intent, size, className }))}
      {...props}
    >
      {icon && <Icon icon={icon} />}
    </button>
  );
};

export { Button, buttonStyles };
