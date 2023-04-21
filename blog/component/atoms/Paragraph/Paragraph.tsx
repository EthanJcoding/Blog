import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";
import { cn } from "../../../utils/twMerge";

const paragraphVariants = cva("max-w-prose", {
  variants: {
    size: {
      default: "text-xl sm:text-lg",
      sm: "sm:text-xl ",
      highlight: "sm:text-4xl",
    },
  },
  defaultVariants: {
    size: "default",
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
