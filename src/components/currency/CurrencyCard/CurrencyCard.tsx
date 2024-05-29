import { ICurrency, ICurrencyInfo } from "models/currency.models";
import styled from "styled-components";
import { CURRENCY_CARD_WIDTH, MAIN_TEXT_COLOR } from "variables";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "domain/routPaths";
import { TickerDataEnum, tickerDataTitle } from "enums/ticker.enum";
import { priceFormatter } from "utils/priceFormat";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  margin-top: auto;
  background-color: #eeeeee;
  color: ${MAIN_TEXT_COLOR};
  border-radius: 12px;
  width: ${CURRENCY_CARD_WIDTH};
  overflow: hidden;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.1);
  transition: 100ms all ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.2);
  }
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 15px;
  background-color: #444;
  color: #fff;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 15px 15px;
`;

const Param = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ParamName = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const ParamData = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const ParamDataItem = styled.div`
  font-size: 14px;
`;

interface IProps {
  card: ICurrency;
}

const includeInfoList: TickerDataEnum[] = [TickerDataEnum.c, TickerDataEnum.o];

export default function CurrencyCard({ card }: IProps) {
  const { name, info } = card;

  const filteredInfo = Object.keys(info).filter((i) =>
    includeInfoList.includes(i as TickerDataEnum)
  );

  const navigate = useNavigate();

  const openCurrencyCard = () => {
    navigate(RoutePath.getCurrencyDetailsPath(name.replace("/", "-")));
  };

  return (
    <Wrapper onClick={openCurrencyCard}>
      <Name>{name}</Name>
      <Info>
        {filteredInfo.map((key) => {
          const item = info[key as keyof ICurrencyInfo];

          return (
            <Param key={key}>
              <ParamName>{tickerDataTitle[key as TickerDataEnum]}:</ParamName>
              <ParamData>
                {Array.isArray(item) ? (
                  <ParamDataItem key={item[0]}>
                    {priceFormatter.format(+item[0])}
                  </ParamDataItem>
                ) : (
                  <ParamDataItem>{priceFormatter.format(+item)}</ParamDataItem>
                )}
              </ParamData>
            </Param>
          );
        })}
      </Info>
    </Wrapper>
  );
}
