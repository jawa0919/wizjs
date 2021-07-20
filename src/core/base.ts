/*
 * @FilePath     : /wizjs/src/core/base.ts
 * @Date         : 2021-07-19 15:36:17
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 基础
 */

import { exec } from "./sdk";

/**
 * 测试测试
 */
export function test(): Promise<String> {
  return exec<String>("test");
}
