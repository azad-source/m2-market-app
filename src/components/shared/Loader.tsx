import styled from "styled-components";
import SpinnerGrid from "./Spinner";

interface IProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Loader({ isLoading, children }: IProps) {
  return (
    <>
      {isLoading ? (
        <SpinnerWrapper>
          <SpinnerGrid />
        </SpinnerWrapper>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
