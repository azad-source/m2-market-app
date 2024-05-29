import ProductList from "components/product/ProductList/ProductList";
import Loader from "components/shared/Loader";
import { useEffect } from "react";
import { useAppStore } from "store";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-bottom: 20px;
`;

export default function ProductsPage() {
  const { products, isLoading, fetchProducts } = useAppStore();

  const pairs = [
    "BTC/USD",
    "ETH/USD",
    "SOL/USD",
    "DOGE/USD",
    "SHIB/USD",
    "LINK/USD",
  ];

  useEffect(() => {
    fetchProducts({ pairs });
  }, []);

  return (
    <Loader isLoading={isLoading}>
      <Wrapper>
        <ProductList currencies={products} />
      </Wrapper>
    </Loader>
  );
}
