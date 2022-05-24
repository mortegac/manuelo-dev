import { PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

/**
 * Component for the Quote Slice.
 */
const Quote = ({ slice }) => {
  return (
    <section>
      {prismicH.isFilled.richText(slice.primary.quote) && (
        <blockquote>
          <span>&ldquo;</span>
          <PrismicText field={slice.primary.quote} />
          <span>&rdquo;</span>
        </blockquote>
      )}
    </section>
  );
};

export default Quote;
