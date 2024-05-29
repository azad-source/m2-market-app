import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import styled from "styled-components";
import { MIN_CONTENT_WIDTH, SIDE_PADDING } from "variables";
import { useAppStore } from "store";
import { useEffect } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  background-color: #eee;
`;

const Content = styled.div`
  padding: ${SIDE_PADDING} 0;
  margin: 0 auto;
  min-width: ${MIN_CONTENT_WIDTH};
`;

export default function AppRoot() {
  const { fetchPrivateToken } = useAppStore();

  useEffect(() => {
    fetchPrivateToken();
  }, []);

  return (
    <Wrapper>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Wrapper>
  );
}
