/*
 * @FilePath     : /wizjs/src/core/location.ts
 * @Date         : 2021-08-05 14:27:03
 * @Author       : jawa0919 <jawa0919@163.com>
 * @Description  : 定位
 */

import { LocationInfo } from "../types";
import { exec } from "./sdk";

/**
 * 获取定位信息
 * @returns 定位详细信息
 */
export function getLocation(): Promise<LocationInfo> {
  return exec<LocationInfo>("getLocation", {});
}
