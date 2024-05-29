import styled, { css, keyframes } from "styled-components";
import { ICurrency, ICurrencyInfo } from "models/currency.models";
import { useEffect, useState } from "react";
import { TickerDataEnum, tickerDataTitle } from "enums/ticker.enum";
import { priceFormatter } from "utils/priceFormat";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 200px;
`;

const Name = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #d14836;
`;

const Info = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 15px;
`;

const Param = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
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
  currency: ICurrency | null;
}

export default function CurrencyDetails({ currency }: IProps) {
  return (
    <>
      <Wrapper>
        <Name>{currency?.name}</Name>
        <Info>
          {currency ? (
            Object.keys(currency?.info).map((key) => {
              const item = currency?.info[key as keyof ICurrencyInfo];

              return (
                <Param key={key}>
                  <ParamName>
                    {tickerDataTitle[key as TickerDataEnum]}:
                  </ParamName>
                  <ParamData>
                    {Array.isArray(item) ? (
                      <ParamDataItem key={item[0]}>
                        {priceFormatter.format(+item[0])}
                      </ParamDataItem>
                    ) : (
                      <ParamDataItem>
                        {priceFormatter.format(+item)}
                      </ParamDataItem>
                    )}
                  </ParamData>
                </Param>
              );
            })
          ) : (
            <>Loading ...</>
          )}
        </Info>
      </Wrapper>
    </>
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
