import {
  IFetchCurrenciesParams,
  ICurrencyInfo,
  ICurrency,
} from "models/currency.models";
import { create } from "zustand";
import { api, getMessageSignature } from "./apiConfig";
import { IResponse } from "models/shared.models";
import { IToken } from "models/token.models";

interface IAppState {
  currencyPairList: ICurrency[];
  currencyPair?: ICurrency;
  isLoading: boolean;
  privateToken?: string;
  fetchCurrencies: (params: IFetchCurrenciesParams) => void;
  fetchCurrencyByName: (pairName: string) => void;
  fetchPrivateToken: () => void;
  setLoading: (bool: boolean) => void;
}

export const useAppStore = create<IAppState>()((set) => ({
  currencyPairList: [],
  isLoading: false,
  setLoading: (bool) => {
    set({ isLoading: bool });
  },
  fetchCurrencies: async ({ pairs }) => {
    const path = "/0/public/Ticker";
    const nonce = Date.now() * 100;
    const body = "nonce=" + nonce + "&" + "";

    try {
      set({ isLoading: true });

      const res = await api.get(path, {
        headers: {
          "API-Sign": getMessageSignature(nonce, path, body),
        },
        params: { pair: pairs.join(",") },
      });
      const data: IResponse<Record<string, ICurrencyInfo>> = await res.data;

      const result = data.result;

      const currencyPairList: ICurrency[] = Object.keys(result).map((key) => ({
        name: key,
        info: result[key],
      }));

      set({ currencyPairList });
    } catch (err) {
      console.error("error:" + err);
    } finally {
      set({ isLoading: false });
    }
  },
  fetchCurrencyByName: async (pairName: string) => {
    const path = "/0/public/Ticker";
    const nonce = Date.now() * 100;
    const body = "nonce=" + nonce + "&" + "";

    try {
      set({ isLoading: true });

      const res = await api.get(path, {
        headers: {
          "API-Sign": getMessageSignature(nonce, path, body),
        },
        params: { pair: pairName },
      });
      const data: IResponse<Record<string, ICurrencyInfo>> = await res.data;

      const result = data.result;

      const currencies: ICurrency[] = Object.keys(result).map((key) => ({
        name: key,
        info: result[key],
      }));

      set({ currencyPair: currencies[0] });
    } catch (err) {
      console.error("error:" + err);
    } finally {
      set({ isLoading: false });
    }
  },
  fetchPrivateToken: async () => {
    const path = "/0/private/GetWebSocketsToken";
    const nonce = Date.now() * 100;
    const body = "nonce=" + nonce + "&" + "";

    try {
      const res = await api.post(path, body, {
        headers: {
          "API-Sign": getMessageSignature(nonce, path, body),
        },
      });
      const data: IResponse<IToken> = await res.data;

      if (data.result) {
        set({ privateToken: data.result.token });
      }
    } catch (err) {
      console.error("error:" + err);
    }
  },
}));
