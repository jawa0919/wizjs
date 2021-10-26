/*
 * @FilePath     : /wizjs/src/core/device.ts
 * @Date         : 2021-08-05 14:40:36
 * @Author       : jawa0919 <jawa0919@163.com>
 * @Description  : 文件
 */

import { exec } from "./sdk";

/**
 * 扫码
 * @returns void
 */
export function scanQRCode(): Promise<{ code: string }> {
  return exec<{ code: string }>("scanQRCode", {});
}

/**
 * 扫码
 * @returns void
 */
export function scanCode(): Promise<{ result: string }> {
  return exec<{ result: string }>("scanCode", {});
}
