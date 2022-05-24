import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

const Nationality = ({ slice }) => {
  const primary = slice.primary.flag;
  return (
    <section>
      <Image
        src={primary.url}
        alt={primary.alt}
        width={primary.dimensions.width}
        height={primary.dimensions.height}
        layout="responsive"
      />
      <PrismicRichText field={slice.primary.capital} />
    </section>
  );
};

export default Nationality;
