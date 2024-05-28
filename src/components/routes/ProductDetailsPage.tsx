import ProductDetails from "components/product/ProductDetails/ProductDetails";
import Loader from "components/shared/Loader";
import { useEffect } from "react";
import { useAppStore } from "store";
import styled from "styled-components";

const Wrapper = styled.div``;

export default function ProductDetailsPage() {
  const { isLoading, product, fetchWebsocketsToken } = useAppStore();

  useEffect(() => {
    fetchWebsocketsToken();
  }, []);

  if (!product) return null;

  return (
    <Loader isLoading={isLoading}>
      <Wrapper>
        <ProductDetails currency={product} />
      </Wrapper>
    </Loader>
  );
}
