import { describe, expect, test } from "vitest";
import { render, within } from "@testing-library/react";
import CurrencyCard from "components/currency/CurrencyCard/CurrencyCard";
import { BrowserRouter } from "react-router-dom";
import CurrencyMock from "mock/currency.mock";

const currencyMock = new CurrencyMock();

describe("Footer", () => {
  test("renders", () => {
    const card = currencyMock.base();

    const { getByTestId } = render(<CurrencyCard card={card} />, {
      wrapper: BrowserRouter,
    });

    expect(getByTestId("currency-card-name").textContent).toBe(card.name);

    const param = getByTestId("currency-card-param-c");
    const paramName = within(param).getByTestId("param-name").textContent;
    const paramValue = within(param).getByTestId("param-value").textContent;

    expect(paramName).toBe("Last trade closed:");
    expect(paramValue).toBe("$67,675.00");
  });
});
