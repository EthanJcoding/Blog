import React, { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/twMerge";

const imageStyles = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      intent: {
        round: "bg-slate-900 text-white hover:bg-slate-700",
        square: "bg-slate-700",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
      },
    },
    defaultVariants: {
      intent: "round",
      size: "default",
    },
  }
);

interface ImageProps
  extends React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >,
    VariantProps<typeof imageStyles> {}

const Image = ({ className, size, intent, ...props }: ImageProps) => {
  return (
    <img className={cn(imageStyles({ intent, size, className }))} {...props} />
  );
};
export { Image, imageStyles };
