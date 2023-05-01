import React from "react";
import Image, { StaticImageData } from "next/image";
import { cva, VariantProps } from "class-variance-authority";

const ImageLayoutStyles = cva("flex object-cover", {
  variants: {
    size: {
      rounded: "rounded-full xl:w-40 xl:h-40 w-32 h-32",
      squared: "w-40 h-40",
    },
  },
  defaultVariants: {
    size: "rounded",
  },
});

interface ImageLayoutProps extends VariantProps<typeof ImageLayoutStyles> {
  alt: string;
  src: StaticImageData;
}

const ImageLayout = ({ src, alt, size, ...props }: ImageLayoutProps) => {
  return (
    <Image
      alt={alt}
      src={src}
      className={ImageLayoutStyles({ size })}
      {...props}
    />
  );
};

export { ImageLayout };
