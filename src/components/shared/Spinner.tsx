import styled, { keyframes } from "styled-components";

export default function SpinnerGrid() {
  return (
    <Wrapper>
      <LdsGrid>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </LdsGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  transition: 0.2s;
  z-index: 15;

  &_bg {
    background: rgba($color: #fff, $alpha: 0.03);
  }
`;

const ldsGridKeyFrames = keyframes`
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const LdsGrid = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  div {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #222;
    animation: ${ldsGridKeyFrames} 1.2s linear infinite;
  }

  div:nth-child(1) {
    top: 8px;
    left: 8px;
    animation-delay: 0s;
  }
  div:nth-child(2) {
    top: 8px;
    left: 32px;
    animation-delay: -0.4s;
  }
  div:nth-child(3) {
    top: 8px;
    left: 56px;
    animation-delay: -0.8s;
  }
  div:nth-child(4) {
    top: 32px;
    left: 8px;
    animation-delay: -0.4s;
  }
  div:nth-child(5) {
    top: 32px;
    left: 32px;
    animation-delay: -0.8s;
  }
  div:nth-child(6) {
    top: 32px;
    left: 56px;
    animation-delay: -1.2s;
  }
  div:nth-child(7) {
    top: 56px;
    left: 8px;
    animation-delay: -0.8s;
  }
  div:nth-child(8) {
    top: 56px;
    left: 32px;
    animation-delay: -1.2s;
  }
  div:nth-child(9) {
    top: 56px;
    left: 56px;
    animation-delay: -1.6s;
  }
`;
