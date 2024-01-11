import { MockMethod } from "vite-plugin-mock";

const timeout: number = 1000; // 请求时间
const loginApi: Array<MockMethod> = [
  {
    url: "/api/login",
    method: "post",
    timeout,
    response: (params: any) => {
      const { username } = params.query;
      return {
        status: 200,
        message: "登录成功！",
        data: {
          token: "token",
          userInfo: {
            username,
          },
        },
      };
    },
  },
  {
    url: "/api/test",
    method: "post",
    timeout,
    response: (params: any) => {
      return {
        status: 200,
        message: "接口调用成功！",
        data: params,
      };
    },
  },
];

export default loginApi;
