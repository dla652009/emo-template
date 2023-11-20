import request from '../utils/request'
 
/**
 * 测试接口
 */
 
// 测试用Hello World
export const TestApi = () => request({ url: '/api/test', method: 'get' })