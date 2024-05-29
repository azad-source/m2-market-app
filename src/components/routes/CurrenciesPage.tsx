import CurrencyList from "components/currency/CurrencyList/CurrencyList";
import Loader from "components/shared/Loader";
import { useEffect } from "react";
import { useAppStore } from "store";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-bottom: 20px;
`;

export default function CurrenciesPage() {
  const { pairsList, currencyPairList, isLoading, fetchCurrencies } =
    useAppStore();

  const pairs = [
    "BTC/USD",
    "ETH/USD",
    "SOL/USD",
    "DOGE/USD",
    "SHIB/USD",
    "LINK/USD",
  ];

  useEffect(() => {
    fetchCurrencies({ pairs });
  }, [pairsList]);

  return (
    <Loader isLoading={isLoading}>
      <Wrapper>
        <CurrencyList currencies={currencyPairList} />
      </Wrapper>
    </Loader>
  );
}
