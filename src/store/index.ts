import {
  IFetchCurrenciesParams,
  ICurrencyInfo,
  IResponse,
  ICurrency,
} from "models/product.models";
import { create } from "zustand";
import { api, getKrakenSignature, getKrakenSignature2 } from "./apiConfig";

interface IAppState {
  products: ICurrency[];
  product?: ICurrency;
  isLoading: boolean;
  websocketsToken?: string;
  fetchProducts: (params: IFetchCurrenciesParams) => void;
  fetchProduct: (currencyName: string) => void;
  fetchWebsocketsToken: () => void;
}

export const useAppStore = create<IAppState>()((set) => ({
  products: [],
  isLoading: false,
  fetchProducts: async ({ pairs }: IFetchCurrenciesParams) => {
    const path = "/0/public/Ticker";
    const nonce = Date.now().toString();

    try {
      set({ isLoading: true });

      const res = await api.get(path, {
        headers: { "API-Sign": getKrakenSignature(nonce, path) },
        params: { pair: pairs.join(",") },
      });
      const data: IResponse<Record<string, ICurrencyInfo>> = await res.data;

      const result = data.result;

      const products: ICurrency[] = Object.keys(result).map((key) => ({
        name: key,
        info: result[key],
      }));

      set({ products });
    } catch (err) {
      console.error("error:" + err);
    } finally {
      set({ isLoading: false });
    }
  },
  fetchProduct: async (currencyName: string) => {},
  fetchWebsocketsToken: async () => {
    const path = "/0/private/GetWebSocketsToken";
    const nonce = Date.now().toString();

    const apiPostBodyData = "nonce=" + nonce;

    try {
      const res = await api.post(path, apiPostBodyData, {
        headers: {
          "API-Sign": getKrakenSignature2(nonce, path, apiPostBodyData),
        },
      });
      const data: any = await res.data;

      console.log("=== websocket token", data);
    } catch (err) {
      console.error("error:" + err);
    }
  },
}));
