/**
 * 加密
 */
import SHA1 from "crypto-js/sha1"; // sha1加密

export const Sha1 = (data: any) => SHA1(data).toString();
