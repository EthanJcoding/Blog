import { memo, type FC } from "react";

import dynamic from "next/dynamic";
import Image from "next/image";

export interface Props {
  caption: string;
  image: string;
}

const Figure: FC<Props> = ({ caption, image }) => {
  return (
    <div className="mt-6 leading-7 ">
      <figure>
        <Image
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          src={image}
          alt={caption}
        />
        {!!caption && (
          <figcaption className="mt-2 text-center text-xs text-neutral-500 dark:text-neutral-400 md:mt-3 md:text-sm">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
};

export default memo(
  dynamic<Props>(() => Promise.resolve((props) => <Figure {...props} />), {
    ssr: false,
  })
);
