/*
 * @FilePath     : /wizjs/src/core/openApi.ts
 * @Date         : 2021-08-05 14:40:36
 * @Author       : jawa0919 <jawa0919@163.com>
 * @Description  : 开放接口
 */

import { EASCUserInfo, WizUserInfo } from "../types";
import { exec } from "./sdk";

/**
 * 获取用户登录token-即将过期请使用getUserToken
 * @returns
 */
export function getToken(): Promise<{ token: string }> {
  return exec<{ token: string }>("getToken", {});
}

/**
 * 获取用户登录token
 * @returns
 */
export function getUserToken(): Promise<WizUserInfo> {
  return exec<WizUserInfo>("getUserToken", {});
}

/**
 * 获取用户信息
 * @returns
 */
export function getUserInfo(): Promise<EASCUserInfo> {
  return exec<EASCUserInfo>("getUserInfo", {});
}
