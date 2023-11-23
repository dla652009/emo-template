export const loading = (callBack: Function, time: number = 300) => {
    // 延迟
    let timeout;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        callBack();
      }, time);
    }
  };
  
  