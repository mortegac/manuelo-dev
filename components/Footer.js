// import { PrismicLink } from "@prismicio/react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 200px;
`;

/**
 * Links and credit to be used at the bottom of every page.
 */
export const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Proudly published with{" "}
        {/* <PrismicLink href="https://prismic.io" target="_blank">
          Prismic
        </PrismicLink> */}
      </p>
      {/* <PrismicLink href="https://prismic.io" target="_blank">
        <Image
          src="/logo-prismic.svg"
          alt="Prismic logo"
          height="100px"
          width="100px"
        />
      </PrismicLink> */}
    </StyledFooter>
  );
};
