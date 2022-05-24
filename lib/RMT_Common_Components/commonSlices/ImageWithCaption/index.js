import { PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import Image from "next/image";

/**
 * Component for the ImageWithCaption Slice.
 */
const ImageWithCaption = ({ slice }) => {
  const image = slice.primary.image;
  const caption = slice.primary.caption;

  return (
    <section>
      <figure>
        {prismicH.isFilled.image(image) && (
          <div>
            <Image
              src={image.url}
              alt={image.alt}
              width={image.dimensions.width}
              height={image.dimensions.height}
              layout="responsive"
            />
          </div>
        )}
        {prismicH.isFilled.richText(caption) && (
          <figcaption>
            <PrismicText field={caption} />
          </figcaption>
        )}
      </figure>
    </section>
  );
};

export default ImageWithCaption;
