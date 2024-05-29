import styled, { css, keyframes } from "styled-components";
import { ICurrency, ICurrencyInfo } from "models/currency.models";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const Name = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #d14836;
`;

const Info = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 0 15px 15px;
`;

const Param = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ParamName = styled.div`
  font-weight: bold;
`;

const ParamData = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

interface IProps {
  currency: ICurrency;
}

export default function CurrencyDetails({ currency }: IProps) {
  const { name, info } = currency;

  return (
    <Wrapper>
      <Name>{name}</Name>
      <Info>
        {Object.keys(info).map((key) => {
          const item = info[key as keyof ICurrencyInfo];

          return (
            <Param key={key}>
              <ParamName>{key}:</ParamName>
              <ParamData>
                {Array.isArray(item) ? (
                  item.map((i, index) => (
                    <ParamDataItem key={i + index}>{i}</ParamDataItem>
                  ))
                ) : (
                  <ParamDataItem>{item}</ParamDataItem>
                )}
              </ParamData>
            </Param>
          );
        })}
      </Info>
    </Wrapper>
  );
}

interface IParamDataItemProps {
  children: React.ReactNode;
}

const blinkAnimation = keyframes`
  0% {
    background-color: yellow;
  }
  100% {
    background-color: transparent;
  }
`;

const DataItemWrapper = styled.div<{ $isBlinking?: boolean }>`
  animation: ${(props) =>
    props.$isBlinking
      ? css`
          ${blinkAnimation} 1s ease-out
        `
      : undefined};
`;

const ParamDataItem: React.FC<IParamDataItemProps> = ({ children }) => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    setIsBlinking(true);
  }, [children]);

  useEffect(() => {
    if (isBlinking) {
      const timer = setTimeout(() => {
        setIsBlinking(false);
      }, 1000); // Длительность мерцания (в миллисекундах)
      return () => clearTimeout(timer);
    }
  }, [isBlinking]);

  return <DataItemWrapper $isBlinking={isBlinking}>{children}</DataItemWrapper>;
};
