import styled from "styled-components";
import { FOOTER_BG_COLOR } from "variables";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  background-color: ${FOOTER_BG_COLOR};
  color: #fff;
`;

export default function ProductCard() {
  return <Wrapper>ProductCard</Wrapper>;
}
