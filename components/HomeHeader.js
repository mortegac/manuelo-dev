import { PrismicText } from "@prismicio/react";
import Image from "next/image";

/**
 * The site's global header.
 */
export const HomeHeader = ({ image, headline, description }) => {
  return (
    <header>
      <Image
        src={image.url}
        alt={image.alt}
        height={image.dimensions.height}
        width={image.dimensions.width}
      />
      <h1>
        <PrismicText field={headline} />
      </h1>
      <p>
        <PrismicText field={description} />
      </p>
    </header>
  );
};
