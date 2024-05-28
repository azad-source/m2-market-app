import { ICurrency } from "models/product.models";
import ProductCard from "../ProductCard/ProductCard";
import styled from "styled-components";
import { CURRENCY_CARD_WIDTH } from "variables";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${CURRENCY_CARD_WIDTH}, 1fr));
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
`;

interface IProps {
  currencies: ICurrency[];
}

export default function ProductList({ currencies }: IProps) {
  return (
    <Wrapper>
      {currencies.map((c) => (
        <ProductCard card={c} key={c.name} />
      ))}
    </Wrapper>
  );
}
