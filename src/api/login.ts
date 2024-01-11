import request from "@/utils/request";

export const login = (params: any) =>
  request({ url: "/api/login", method: "post", params });

export const test = (params: any) =>
  request({ url: "/api/test", method: "post", params });
