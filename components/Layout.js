import { Footer } from "../components/Footer";

/**
 * The default layout for all pages.
 */
export const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};
