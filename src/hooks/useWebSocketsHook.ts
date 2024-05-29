import { isWsOpened } from "helpers/webSocket.helpers";
import { IOhlcData, ITickerData } from "models/currency.models";
import { ISubscriptionParams } from "models/websocket.models";
import { useEffect, useState } from "react";
import { useAppStore } from "store";

const apiUrl = import.meta.env.VITE_KRAKEN_WEBSOCKET_API_URL;

let ws: WebSocket;

export default function useWebSocketsHook(
  subscriptionParams: ISubscriptionParams
) {
  const { interval } = subscriptionParams;

  const { privateToken } = useAppStore();

  const [ohlcData, setOhlcData] = useState<IOhlcData[]>([]);

  const [tickerData, setTickerData] = useState<ITickerData[]>([]);

  const subscriptionMessage = {
    method: "subscribe",
    params: subscriptionParams,
  };

  useEffect(() => {
    ws = new WebSocket(apiUrl);

    if (ws) {
      ws.onopen = () => {
        if (isWsOpened(ws)) {
          ws.send(JSON.stringify(subscriptionMessage));
        }
      };

      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);

        if (msg.channel === "ticker") {
          const tick = msg.data[0];
          tick.timestamp = new Date().toISOString();
          setTickerData((prev) => [...prev, tick]);
        } else if (msg.channel === "ohlc") {
          const data: IOhlcData[] = msg.data;

          setOhlcData((prev) => {
            if (data.length > 1) {
              return data;
            } else {
              if (prev.some((i) => i.timestamp === data[0].timestamp)) {
                return prev;
              }
              return [...prev, ...data];
            }
          });
        }
      };

      ws.onclose = () => {
        console.log("WebSocket connection closed");
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
    }
  }, [privateToken, interval]);

  useEffect(() => {
    return () => {
      if (isWsOpened(ws)) {
        ws?.close();
      }
    };
  }, []);

  return { ohlcData, tickerData };
}
