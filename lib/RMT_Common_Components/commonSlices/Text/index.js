import { PrismicRichText } from "@prismicio/react";

/**
 * Component for the Text Slice.
 */
const Text = ({ slice }) => {
  return (
    <section>
      <PrismicRichText
        field={slice.primary.text}
        components={{
          heading2: ({ children }) => <h2>{children}</h2>,
          paragraph: ({ children }) => <p>{children}</p>,
          oList: ({ children }) => <ol>{children}</ol>,
          oListItem: ({ children }) => <li>{children}</li>,
          list: ({ children }) => <ul>{children}</ul>,
          listItem: ({ children }) => <li>{children}</li>,
          strong: ({ children }) => <strong>{children}</strong>,
        }}
      />
    </section>
  );
};

export default Text;
