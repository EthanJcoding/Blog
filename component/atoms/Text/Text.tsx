import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "../../../utils/twMerge";

const textVariants = cva("max-w-prose", {
  variants: {
    size: {
      title: "text-xl xl:text-3xl xsm:text-lg",
      name: "text-3xl xl:text-5xl 2xsm:text-lg",
      content: "text-md xl:text-lg xsm:text-md",
      small_content: "text-md",
    },
    font: {
      none: "",
      semi_bold: "font-semibold",
    },
    textColor: {
      none: "",
      content: "text-contentText",
    },
  },
  defaultVariants: {
    size: "title",
    font: "none",
    textColor: "none",
  },
});

interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

const Text = ({
  className,
  size,
  children,
  font,
  textColor,
  ...props
}: TextProps) => {
  return (
    <p
      {...props}
      className={cn(textVariants({ size, textColor, font, className }))}
    >
      {children}
    </p>
  );
};

export { Text, textVariants };
