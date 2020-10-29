/*
 * @Author: Willie Chen
 * @LastEditors: Willie Chen
 * @Date: 2019-09-30 16:12:38
 * @LastEditTime: 2020-10-26 18:14:05
 * @Description: 工具集
 */

import koa, { ParameterizedContext } from 'koa';

const isDev = process.env.NODE_ENV === 'development';

interface IResData {
  msg?: string;
  data?: any;
  isSuccess: boolean;
}

export default {
  /**
   * 返回值处理
   * @param {koa.ParameterizedContext} ctx
   * @param {object} resData
   * @param {boolean} resData.isSuccess 
   * @param {string} [resData.msg] 自定义返回描述，默认错误是 'error', 成功是 'success'
   * @param {object} [resData.data] json数据
   * @param {number} [resData.dataVersion] dataVersion
   * @param {number} [statusCode] 状态码，默认200
   */
  resHandler (ctx: ParameterizedContext, resData: IResData, statusCode = 200) {
    const json = {
      ...resData,
      isSuccess: resData.isSuccess,
      msg: resData.msg || (resData.isSuccess ? 'success' : 'request error'),
    };
    if (resData.isSuccess && resData.data != undefined) json.data = resData.data;
    
    ctx.status = statusCode;
    ctx.body = json;
  },

  getRandomInt (min = 0, max = 10) {
    if (min - 0 !== min || max - 0 !== max || min > max) {
      return 0;
    }
    return (Math.random() * (max - min + 1) + min) | 0;
  },

  getRandomFloat (min = 0, max = 1, decimal = 2) {
    if (min - 0 !== min || max - 0 !== max || min > max) {
      return 0;
    }
    const res = Math.random() * (max - min) + min;
    return (res as any).toFixed(decimal) - 0;
  },

  createUuid () {
    return Math.random().toString(36).substring(2) + ((new Date()).getTime() + ((Math.random() * 10 | 0) << 24)).toString(36);
  },
}