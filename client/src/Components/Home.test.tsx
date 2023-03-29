
import {test} from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import "@testing-library/jest-dom/extend-expect";

test("Given the Home, When the component is rendered, Then the text should be present", () => {
  render(<Home />);
  const text = screen.getByText(
    /Welcome to the home of Justice Department of Fakelandia!/i
  );
  expect(text).toBeInTheDocument();
});
