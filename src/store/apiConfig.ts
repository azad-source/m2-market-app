import axios from "axios";
import CryptoJS from "crypto-js";

const apiPublicKey = import.meta.env.VITE_KRAKEN_API_KEY || "";
const apiPrivateKey = import.meta.env.VITE_KRAKEN_API_SECRET || "";

export const api = axios.create({
  baseURL: "/",
  headers: {
    "API-Key": apiPublicKey,
  },
});

export const getMessageSignature = (
  nonce: number,
  path: string,
  apiPostBodyData: string
) => {
  const secret = CryptoJS.enc.Base64.parse(apiPrivateKey);
  const hashDigest = CryptoJS.SHA256(nonce + apiPostBodyData);
  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA512, secret);
  hmac.update(path);
  hmac.update(hashDigest);

  return CryptoJS.enc.Base64.stringify(hmac.finalize());
};
