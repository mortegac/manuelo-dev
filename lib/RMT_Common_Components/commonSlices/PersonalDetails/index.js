import { PrismicRichText } from "@prismicio/react";

const PersonalDetails = ({ slice }) => (
  <section>
    <span>
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    {slice.primary.description ? (
      <PrismicRichText field={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
  </section>
);

export default PersonalDetails;
