import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "components/shared/Header";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  test("renders", () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByText("Home Page")).toBeDefined();
  });
});
