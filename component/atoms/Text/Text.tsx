import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "services";

const textVariants = cva("", {
  variants: {
    size: {
      title: "text-xl xl:text-3xl xsm:text-lg",
      name: "text-3xl xl:text-5xl 2xsm:text-lg",
      content: "text-sm xl:text-base ",
      medium_content: "text-xl",
      small_content: "text-xs xl:text-sm ",
    },
    font: {
      none: "",
      semi_bold: "font-semibold",
    },
    textColor: {
      none: "",
      content: "text-contentText",
      toc: "text-contentText/75",
      onObserver: "text-[#4F80FF]",
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
