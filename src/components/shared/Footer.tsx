import styled from "styled-components";
import { FOOTER_BG_COLOR } from "variables";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  background-color: ${FOOTER_BG_COLOR};
  color: #fff;
`;

const Copyright = styled.div`
  padding: 30px;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Copyright>
        Copyright © M2-Market-App - {new Date().getFullYear()}
      </Copyright>
    </Wrapper>
  );
}
