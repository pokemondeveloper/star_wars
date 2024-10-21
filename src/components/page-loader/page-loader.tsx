import { Spinner } from "@nextui-org/react";

/**
 * A component that renders a full-page spinner.
 *
 * It is useful for showing a loading state while a page is being fetched.
 *
 * @returns A JSX element representing the page loader.
 */
export const PageLoader = () => (
  <div className="w-full h-[70vh] flex items-center justify-center">
    <Spinner size="lg" />
  </div>
);
