import { isWsOpened } from "helpers/webSocket.helpers";
import { ICurrency } from "models/product.models";
import { ISubscriptionParams } from "models/websocket.models";
import { useEffect, useState } from "react";
import { useAppStore } from "store";

const apiUrl = import.meta.env.VITE_KRAKEN_WEBSOCKET_API_URL;

let ws: WebSocket;

export default function useWebSocketsHook(
  subscriptionParams: ISubscriptionParams
) {
  const { privateToken } = useAppStore();

  const [data, setData] = useState<ICurrency | null>(null);

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
        const newMessage = JSON.parse(event.data);

        if (Array.isArray(newMessage) && newMessage.includes("ticker")) {
          const curr: ICurrency = {
            name: newMessage[newMessage.length - 1],
            info: newMessage[1],
          };

          setData(curr);
        }
      };

      ws.onclose = () => {
        console.log("WebSocket connection closed");
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
    }
  }, [privateToken]);

  useEffect(() => {
    return () => {
      if (isWsOpened(ws)) {
        ws?.close();
      }
    };
  }, []);

  return { data };
}
