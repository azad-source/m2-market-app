import CurrencyDetails from "components/currency/CurrencyDetails/CurrencyDetails";
import Loader from "components/shared/Loader";
import { OhlcIntervalEnum } from "enums/ohlcInterval.enum";
import useWebSocketsHook from "hooks/useWebSocketsHook";
import { ICurrency } from "models/currency.models";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppStore } from "store";
import styled from "styled-components";
import OhlcChart from "components/shared/CurrencyChart";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default function CurrencyDetailsPage() {
  let { currencyId = "" } = useParams();
  const formatedCurrency = currencyId?.replace("-", "/");

  const [currency, setCurrency] = useState<ICurrency | null>(null);

  const { data, ohlcData } = useWebSocketsHook({
    channel: "ohlc",
    symbol: [formatedCurrency],
    interval: OhlcIntervalEnum.ONE_MINUTE,
    snapshot: true,
  });

  const { privateToken, currencyPair, isLoading, fetchCurrencyByName } =
    useAppStore();

  useEffect(() => {
    if (formatedCurrency && privateToken) {
      fetchCurrencyByName(formatedCurrency);
    }
  }, [formatedCurrency, privateToken]);

  useEffect(() => {
    if (data?.name) {
      setCurrency(data);
    } else if (currencyPair?.name) {
      setCurrency(currencyPair);
    }
  }, [currencyPair, data]);

  return (
    <Loader isLoading={isLoading}>
      <Wrapper>
        {currency && (
          <>
            <CurrencyDetails currency={currency} />
            <OhlcChart pair={formatedCurrency} ohlcData={ohlcData} />
          </>
        )}
      </Wrapper>
    </Loader>
  );
}
