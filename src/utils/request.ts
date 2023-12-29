// axios 封装
import axios from "axios";
import { message } from "ant-design-vue";

// axios对象
const service = axios.create({
  // axios请求基础URL
  // 由于本项目使用mock + vite-plugin-mock启动的mock服务，默认使用的端口号与页面一致
  baseURL: "http://127.0.0.1:5173",
  timeout: 5000,
});

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const { data } = response;
    if (data.message) message.success(response.data.message);
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default service;
