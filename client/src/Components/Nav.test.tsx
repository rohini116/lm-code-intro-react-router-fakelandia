import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import Nav from "./Nav"
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

test("Given the Navigational Menu, When the component is rendered, Then the menu text should be present", () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  const text = screen.getByText(/Confession/i);

  expect(text).toBeInTheDocument();
});
