import {
  IFetchCurrenciesParams,
  ICurrencyInfo,
  ICurrency,
} from "models/product.models";
import { create } from "zustand";
import { api, getMessageSignature } from "./apiConfig";
import { IResponse } from "models/shared.models";
import { IToken } from "models/token.models";

interface IAppState {
  products: ICurrency[];
  product?: ICurrency;
  isLoading: boolean;
  privateToken?: string;
  fetchProducts: (params: IFetchCurrenciesParams) => void;
  fetchProductByName: (pairName: string) => void;
  fetchPrivateToken: () => void;
  setLoading: (bool: boolean) => void;
}

export const useAppStore = create<IAppState>()((set) => ({
  products: [],
  isLoading: false,
  setLoading: (bool) => {
    set({ isLoading: bool });
  },
  fetchProducts: async ({ pairs }) => {
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
  fetchProductByName: async (pairName: string) => {
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

      const products: ICurrency[] = Object.keys(result).map((key) => ({
        name: key,
        info: result[key],
      }));

      set({ product: products[0] });
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
