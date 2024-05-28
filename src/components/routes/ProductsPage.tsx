import ProductList from "components/product/ProductList/ProductList";
import Loader from "components/shared/Loader";
import { useEffect } from "react";
import { useAppStore } from "store";
import styled from "styled-components";

export default function ProductsPage() {
  const { products, isLoading, fetchProducts } = useAppStore();

  const pairs = ["BTCUSD", "ETHUSD", "SOLUSD", "DOGEUSD", "SHIBUSD", "LINKUSD"];

  useEffect(() => {
    fetchProducts({ pairs });
  }, []);

  const Wrapper = styled.div`
    padding-bottom: 20px;
  `;

  return (
    <Loader isLoading={isLoading}>
      <Wrapper>
        <ProductList currencies={products} />
      </Wrapper>
    </Loader>
  );
}
