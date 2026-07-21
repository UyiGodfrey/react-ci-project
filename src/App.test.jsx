import React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";

test("renders the Get started heading", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /Get started/i })
  ).toBeInTheDocument();
});