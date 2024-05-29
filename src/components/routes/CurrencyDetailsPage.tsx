import useWebSocketsHook from "hooks/useWebSocketsHook";
import { useParams } from "react-router-dom";
import { useAppStore } from "store";
import styled from "styled-components";
import { TickerChart } from "components/shared/CurrencyChart";
import CurrencyDetails from "components/currency/CurrencyDetails/CurrencyDetails";
import { useEffect, useState } from "react";
import { ICurrency } from "models/currency.models";

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export default function CurrencyDetailsPage() {
  let { currencyId = "" } = useParams();
  const formatedCurrency = currencyId?.replace("-", "/");

  const [currency, setCurrency] = useState<ICurrency | null>(null);

  const { tickerData } = useWebSocketsHook({
    channel: "ticker",
    symbol: [formatedCurrency],
    snapshot: true,
  });

  const { currencyPair, fetchCurrencyByName } = useAppStore();

  useEffect(() => {
    fetchCurrencyByName(formatedCurrency);

    const timeout = setInterval(() => {
      if (formatedCurrency) {
        fetchCurrencyByName(formatedCurrency);
      }
    }, 5000);

    return () => {
      clearInterval(timeout);
    };
  }, [formatedCurrency]);

  useEffect(() => {
    if (currencyPair?.name) {
      setCurrency(currencyPair);
    }
  }, [currencyPair]);

  return (
    <Wrapper>
      <CurrencyDetails currency={currency} />
      <TickerChart pair={formatedCurrency} tickerData={tickerData} />
    </Wrapper>
  );
}
