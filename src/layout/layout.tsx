import { Header } from "../components";
import { Props } from "./types";

/**
 * A basic layout component that wraps the application.
 *
 * It includes a header at the top of the page and a single child element,
 * which is the main content of the page.
 *
 * @param children - The main content of the page.
 * @returns A JSX element representing the layout.
 */
export const Layout = ({ children }: Props) => (
  <>
    <Header />
    <div className="pt-[120px]">{children}</div>
  </>
);
