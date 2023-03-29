import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";
import "@testing-library/jest-dom/extend-expect";

test("Given the Not found page, When the component is rendered, Then the text should be present", () => {
  render(<NotFound />);
  const text = screen.getByText(/404! Page not found!/i);

  expect(text).toBeInTheDocument();
});
