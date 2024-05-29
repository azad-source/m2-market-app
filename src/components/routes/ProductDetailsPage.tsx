import ProductDetails from "components/product/ProductDetails/ProductDetails";
import Loader from "components/shared/Loader";
import { ICurrency } from "models/product.models";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppStore } from "store";
import styled from "styled-components";

const Wrapper = styled.div``;

export default function ProductDetailsPage() {
  let { productId } = useParams();
  const formatedCurrency = productId?.replace("-", "/");

  const [currency, setCurrency] = useState<ICurrency | null>(null);

  const { product, privateToken, isLoading, setLoading, fetchProductByName } =
    useAppStore();

  useEffect(() => {
    if (formatedCurrency) {
      fetchProductByName(formatedCurrency);
    }
  }, []);

  useEffect(() => {
    if (product?.name && !currency?.name) {
      setCurrency(product);
    }
  }, [product]);

  useEffect(() => {
    const ws = new WebSocket(
      `${import.meta.env.VITE_KRAKEN_WEBSOCKET_API_URL}`
    );

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          event: "subscribe",
          subscription: {
            name: "ticker",
            token: privateToken,
          },
          pair: [formatedCurrency],
        })
      );
    };

    ws.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);

      if (Array.isArray(newMessage) && newMessage.includes("ticker")) {
        const curr: ICurrency = {
          name: newMessage[newMessage.length - 1],
          info: newMessage[1],
        };

        setLoading(false);

        setCurrency(curr);
      }
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      ws.close();
    };
  }, [privateToken]);

  if (!currency) return null;

  return (
    <Loader isLoading={isLoading}>
      <Wrapper>
        <ProductDetails currency={currency} />
      </Wrapper>
    </Loader>
  );
}
