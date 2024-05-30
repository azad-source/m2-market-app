import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "components/shared/Footer";

describe("Footer", () => {
  test("renders", () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright © M2-Market-App/)).toBeDefined();
  });
});
