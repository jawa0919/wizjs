/*
 * @FilePath     : /wizjs/src/index.ts
 * @Date         : 2021-07-20 09:18:33
 * @Author       : jawa0919 <jawa0919@163.com>
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

export * from "./types";

export const global: any = typeof window === "undefined" ? {} : window;
export const wiz: Wiz = global.WizJsBridge || global.WizJs || global.Wiz || {};

export const isAndroid = Boolean(navigator.userAgent.match(/android/gi));
export const isIOS = Boolean(navigator.userAgent.match(/iphone|ipod|ipad/gi));

export function isInWizApp(): boolean {
  return typeof wiz.postMessage === "function";
}

export function debugMode(): void {
  wiz.mode = "debug";
}

export function isDebugSDK(): boolean {
  return wiz.mode === "debug";
}

export * from "./core/base"; // 基础
export * from "./core/route"; // 路由
export * from "./core/navigate"; // 跳转
export * from "./core/share"; // 转发
export * from "./core/ui"; // 界面
export * from "./core/network"; // 网络
export * from "./core/storage"; // 数据缓存
export * from "./core/media"; // 媒体
export * from "./core/location"; // 位置
export * from "./core/file"; // 文件
