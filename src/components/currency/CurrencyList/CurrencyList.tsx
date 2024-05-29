import { ICurrency } from "models/currency.models";
import CurrencyCard from "../CurrencyCard/CurrencyCard";
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

export default function CurrencyList({ currencies }: IProps) {
  return (
    <Wrapper>
      {currencies.map((c) => (
        <CurrencyCard card={c} key={c.name} />
      ))}
    </Wrapper>
  );
}
