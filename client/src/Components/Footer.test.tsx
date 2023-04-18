import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom/extend-expect";

test("Given the Footer, When the component is rendered, Then the menu text should be present", () => {
  render(<Footer />);
  const text = screen.getByText(/Rohini/i);

  expect(text).toBeInTheDocument();
});
