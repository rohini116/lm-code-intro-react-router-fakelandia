import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

test("Given the Header, When the component is rendered, Then the text should be present", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const text = screen.getByText(
    /Fakelandia Justice Department/i
  );
  
  expect(text).toBeInTheDocument();
});
