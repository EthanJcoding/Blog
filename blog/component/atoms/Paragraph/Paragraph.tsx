import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";
import { cn } from "../../../utils/twMerge";

const paragraphVariants = cva("max-w-prose", {
  variants: {
    size: {
      title: "text-xl xl:text-3xl xsm:text-lg",
      name: "text-3xl xl:text-5xl 2xsm:text-lg",
      content: "text-lg xl:text-xl xsm:text-lg",
    },
  },
  defaultVariants: {
    size: "title",
  },
});

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size, className }))}
      >
        {children}
      </p>
    );
  }
);

export { Paragraph, paragraphVariants };
