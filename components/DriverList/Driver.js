import { PrismicLink, PrismicText } from "@prismicio/react";

/**
 * Renders a blog post's title, publication date, and excerpt. The title is
 * linked to the blog post's page.
 */
export const Driver = ({ driver }) => {
  return (
    <div>
      <h2>
        <PrismicLink document={driver}>
          <PrismicText field={driver.data.drivername} />
        </PrismicLink>
      </h2>
    </div>
  );
};
