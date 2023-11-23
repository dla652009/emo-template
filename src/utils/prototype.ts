export const mountPrototype = (global: any) => {
  // 挂载原型方法
  global.$loading = loading;
};

const loading = (callBack: Function, time: number = 300) => {
  // 延迟
  let timeout;
  if (!timeout) {
    timeout = setTimeout(() => {
      timeout = null;
      callBack();
    }, time);
  }
};
