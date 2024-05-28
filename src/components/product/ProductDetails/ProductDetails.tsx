import styled from "styled-components";
import { ICurrency } from "models/product.models";

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

const Name = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #d14836;
`;

interface IProps {
  currency: ICurrency;
}

export default function ProductDetails({ currency }: IProps) {
  // const price = product.price
  //   ? `${priceFormatter.format(product.price)}`
  //   : "Not available";

  return (
    <Wrapper>
      <Name>{currency.name}</Name>
    </Wrapper>
  );
}
