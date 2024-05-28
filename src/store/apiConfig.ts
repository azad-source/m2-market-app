import axios from "axios";
import CryptoJS from "crypto-js";
// import crypto from "crypto";

const apiPublicKey = import.meta.env.VITE_KRAKEN_API_KEY || "";
const apiPrivateKey = import.meta.env.VITE_KRAKEN_API_SECRET || "";

export const getKrakenSignature = (nonce: string, path: string) => {
  const message = nonce + `nonce=${nonce}`;
  const secretBuffer = CryptoJS.enc.Base64.parse(apiPrivateKey);
  const hash = CryptoJS.SHA256(path + message).toString(CryptoJS.enc.Hex);
  const hmac = CryptoJS.HmacSHA512(hash, secretBuffer);
  return CryptoJS.enc.Base64.stringify(hmac);
};

export const api = axios.create({
  baseURL: "/",
  headers: {
    "API-Key": apiPublicKey,
  },
});

export const getKrakenSignature2 = (
  nonce: string,
  path: string,
  apiPostBodyData: string
) => {
  const apiPost = nonce + apiPostBodyData;
  const secret = CryptoJS.enc.Base64.parse(apiPrivateKey);
  const hash256 = CryptoJS.SHA256(apiPost).toString(CryptoJS.enc.Hex);
  const hmac512 = CryptoJS.HmacSHA512(path + hash256, secret);
  return CryptoJS.enc.Base64.stringify(hmac512);
};
