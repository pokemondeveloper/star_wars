import { render, screen } from "@testing-library/react";
import { Image } from "./image";

describe("Image", () => {
  test("renders", async () => {
    render(
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s"
        alt="Example image"
      />
    );
    expect(
      screen.getByRole("img", { name: "Example image" })
    ).toBeInTheDocument();
  });
});
