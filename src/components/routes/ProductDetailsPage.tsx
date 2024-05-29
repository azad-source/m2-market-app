import ProductDetails from "components/product/ProductDetails/ProductDetails";
import Loader from "components/shared/Loader";
import { OhlcIntervalEnum } from "enums/ohlcInterval.enum";
import useWebSocketsHook from "hooks/useWebSocketsHook";
import { ICurrency } from "models/product.models";
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

export default function ProductDetailsPage() {
  let { productId = "" } = useParams();
  const formatedCurrency = productId?.replace("-", "/");

  const [currency, setCurrency] = useState<ICurrency | null>(null);

  const { data, ohlcData } = useWebSocketsHook({
    channel: "ohlc",
    symbol: [formatedCurrency],
    interval: OhlcIntervalEnum.FIVE_MINUTE,
    snapshot: true,
  });

  const { privateToken, product, isLoading, fetchProductByName } =
    useAppStore();

  useEffect(() => {
    if (formatedCurrency && privateToken) {
      fetchProductByName(formatedCurrency);
    }
  }, [formatedCurrency, privateToken]);

  useEffect(() => {
    if (data?.name) {
      setCurrency(data);
    } else if (product?.name) {
      setCurrency(product);
    }
  }, [product, data]);

  return (
    <Loader isLoading={isLoading}>
      <Wrapper>
        {currency && (
          <>
            <ProductDetails currency={currency} />
            <OhlcChart pair={formatedCurrency} ohlcData={ohlcData} />
          </>
        )}
      </Wrapper>
    </Loader>
  );
}
