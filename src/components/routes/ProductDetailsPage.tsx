import ProductDetails from "components/product/ProductDetails/ProductDetails";
import Loader from "components/shared/Loader";
import { OhlcIntervalEnum } from "enums/ohlcInterval.enum";
import useWebSocketsHook from "hooks/useWebSocketsHook";
import { ICurrency } from "models/product.models";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppStore } from "store";
import styled from "styled-components";

const Wrapper = styled.div``;

export default function ProductDetailsPage() {
  let { productId = "" } = useParams();
  const formatedCurrency = productId?.replace("-", "/");

  const { data } = useWebSocketsHook({
    channel: "ohlc",
    symbol: [formatedCurrency],
    interval: OhlcIntervalEnum.FOUR_HOUR,
    snapshot: true,
  });

  const [currency, setCurrency] = useState<ICurrency | null>(null);

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
        <ProductDetails currency={currency} />
      </Wrapper>
    </Loader>
  );
}
