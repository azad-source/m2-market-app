import styled from "styled-components";
import SpinnerGrid from "./Spinner";

interface IProps {
  isLoading: boolean;
  children: React.ReactNode;
  withChild?: boolean;
}

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.1);
  z-index: 100;
`;

export default function Loader({
  isLoading,
  children,
  withChild = false,
}: IProps) {
  return (
    <>
      {isLoading ? (
        <SpinnerWrapper>
          <SpinnerGrid />
          {withChild && (
            <>
              <Overlay />
              {children}
            </>
          )}
        </SpinnerWrapper>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
