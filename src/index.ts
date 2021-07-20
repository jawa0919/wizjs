/*
 * @FilePath     : /wizjs/src/index.ts
 * @Date         : 2021-07-20 09:18:33
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 导出
 */

declare global {
  interface Window {
    WizJsBridge?: Wiz;
    WizJs?: Wiz;
    Wiz?: Wiz;
  }
}

declare interface Wiz {
  mode: string;
  postMessage: Function;
  [api: string]: any;
}

export const global: any = typeof window === "undefined" ? {} : window;
export const wiz: Wiz = global.WizJsBridge || global.WizJs || global.Wiz || {};

export const isAndroid = Boolean(navigator.userAgent.match(/android/gi));
export const isIOS = Boolean(navigator.userAgent.match(/iphone|ipod|ipad/gi));

export function isInWizApp(): boolean {
  return typeof wiz.postMessage === "function";
}

export function isDebugSDK(): boolean {
  return wiz.mode === "debug";
}

export * from "./core/base";
