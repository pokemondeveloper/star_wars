import { render, screen } from "@testing-library/react";
import { PageLoader } from "./page-loader";

describe("PageLoader", () => {
  test("renders the spinner", () => {
    render(<PageLoader />);

    const spinner = screen.getByLabelText("Loading");
    expect(spinner).toBeInTheDocument();
  });
});
