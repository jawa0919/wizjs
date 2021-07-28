/*
 * @FilePath     : /wizjs/src/core/network.ts
 * @Date         : 2021-07-22 14:15:52
 * @Author       : jawa0919 <jawa0919@163.com>
 * @Description  : 网络
 */

import {
  isDebugSDK,
  ProgressCallback,
  RequestOpting,
  ResponseOpting,
} from "..";
import { exec } from "./sdk";

/**
 * 网络请求
 * @param opt 请求参数
 * @returns
 */
export function request(opt: RequestOpting | string): Promise<ResponseOpting> {
  if (isDebugSDK()) return _fetch(opt);
  let req = _initRequestOpting(opt);
  return exec<ResponseOpting>("request", req);
}

/**
 * 下载文件资源到本地
 * @param opt 请求参数
 * @param filePath 指定文件下载后存储的路径 (本地路径)
 * @param onProgress 监听下载进度变化事件
 * @returns
 */
export function downloadFile(
  opt: RequestOpting | string,
  filePath: string,
  onProgress?: ProgressCallback
): Promise<ResponseOpting> {
  if (isDebugSDK()) throw "暂无开发网页下载 请使用app打开";
  let req = _initRequestOpting(opt);
  if (onProgress)
    return exec<ResponseOpting>(
      "downloadFile",
      { filePath, ...req },
      onProgress
    );
  else return exec<ResponseOpting>("downloadFile", { filePath, ...req });
}

/**
 * 将本地资源上传到服务器
 * @param opt 请求参数
 * @param filePath 要上传文件资源的路径 (本地路径)
 * @param onProgress 监听上传进度变化事件
 * @returns
 */
export function uploadFile(
  opt: RequestOpting | string,
  filePath: string,
  onProgress?: ProgressCallback
): Promise<ResponseOpting> {
  if (isDebugSDK()) throw "暂无开发网页上传 请使用app打开";
  let req = _initRequestOpting(opt);
  if (onProgress)
    return exec<ResponseOpting>("uploadFile", { filePath, ...req }, onProgress);
  else return exec<ResponseOpting>("uploadFile", { filePath, ...req });
}

function _initRequestOpting(opt: RequestOpting | string): RequestOpting {
  return typeof opt === "string"
    ? { method: "GET", url: opt }
    : { method: "GET", ...opt };
}

async function _fetch(opt: RequestOpting | string): Promise<ResponseOpting> {
  let response: Response;
  if (typeof opt === "string") {
    response = await fetch(opt);
  } else {
    response = await fetch(opt.url, {
      method: opt.method || "GET",
      headers: { ...opt.header },
      body: typeof opt.data === "string" ? opt.data : JSON.stringify(opt.data),
    });
  }
  return {
    data: await response.json(),
    statusCode: response.status,
    header: response.headers,
  };
}
