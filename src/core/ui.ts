/*
 * @FilePath     : /wizjs/src/core/ui.ts
 * @Date         : 2021-07-22 11:03:43
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 界面
 */

import { exec } from "./sdk";

/**
 * 停止当前页面下拉刷新
 */
export function stopPullDownRefresh<T>(): Promise<T> {
  return exec<T>("stopPullDownRefresh", {});
}

/**
 * 开始下拉刷新。调用后触发下拉刷新动画
 */
export function startPullDownRefresh<T>(): Promise<T> {
  return exec<T>("startPullDownRefresh", {});
}
