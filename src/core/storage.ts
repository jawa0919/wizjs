/*
 * @FilePath     : /wizjs/src/core/storage.ts
 * @Date         : 2021-07-22 17:01:22
 * @Author       : jawa0919 <jawa0919@163.com>
 * @Description  : 数据存储
 */

import { exec } from "./sdk";

/**
 * 将数据存储在本地缓存中指定的 key 中
 */
export function setStorage(key: string, value: any): Promise<boolean> {
  return exec<boolean>("setStorage", { key, value });
}

/**
 * 从本地缓存中移除指定 key
 */
export function removeStorage(key: string): Promise<boolean> {
  return exec<boolean>("removeStorage", { key });
}

/**
 * 从本地缓存中异步获取指定 key 的内容
 */
export function getStorage<T>(key: string): Promise<T> {
  return exec<T>("getStorage", { key });
}

/**
 * 获取当前storage的相关信息
 */
export function getStorageInfo<T>(): Promise<T> {
  return exec<T>("getStorageInfo");
}

/**
 * 清理本地数据缓存
 */
export function clearStorage(): Promise<boolean> {
  return exec<boolean>("clearStorage");
}
