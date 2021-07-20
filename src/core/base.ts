/*
 * @FilePath     : /wizjs/src/core/base.ts
 * @Date         : 2021-07-19 15:36:17
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 基础
 */

import { WizSystemInfo } from "../types";
import { exec } from "./sdk";

/**
 * 测试
 */
export function test(): Promise<string> {
  return exec<string>("test");
}

/**
 * 环境变量
 * @returns 文件系统中的用户目录路径 (本地路径)
 */
export function env(): Promise<string> {
  return exec<string>("env");
}

/**
 * 获取系统信息
 * @returns 获取系统信息
 */
export function getSystemInfo(): Promise<WizSystemInfo> {
  return exec<WizSystemInfo>("getSystemInfo");
}
