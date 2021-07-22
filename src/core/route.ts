/*
 * @FilePath     : /wizjs/src/core/route.ts
 * @Date         : 2021-07-21 10:11:51
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 路由
 */

import { exec } from "./sdk";

/**
 * 关闭所有页面，打开到应用内的某个页面
 */
export function reLaunch<T>(url: string): Promise<T> {
  return exec<T>("reLaunch", { url });
}

/**
 * 关闭当前页面，跳转到应用内的某个页面
 */
export function redirectTo<T>(url: string): Promise<T> {
  return exec<T>("redirectTo", { url });
}

/**
 * 保留当前页面，跳转到应用内的某个页面
 */
export function navigateTo<T>(url: string): Promise<T> {
  return exec<T>("navigateTo", { url });
}
