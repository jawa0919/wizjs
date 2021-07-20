/*
 * @FilePath     : /wizjs/src/core/sdk.ts
 * @Date         : 2021-07-19 11:44:08
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 执行函数
 */

import { wiz, isInWizApp, isDebugSDK } from "..";

function exec<T>(
  api: string,
  req?: object,
  ...otherFun: ((args: any) => void)[]
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const id = jsCallback<T>(api, resolve, reject, true, ...otherFun);
    jsPostMessage(api, id, req ?? {}, otherFun.map((r) => r.name) ?? []);
  });
}

let cbIdentity = 0;

function jsCallback<T>(
  api: string,
  resolve: (args: T) => void,
  reject: (args: any) => void,
  once: boolean = true,
  ...otherFunctionList: ((args: any) => void)[]
): string {
  if (!isInWizApp()) reject("需要在App中打开");
  const id: string = `_${++cbIdentity}`;
  const apiId: string = `${api}${id}`;
  if (typeof wiz[apiId] === "undefined") wiz[apiId] = {};
  const wizApi: any = wiz[apiId];
  wizApi[`resolve`] = (data: T) => {
    if (isDebugSDK()) console.log("jsCallback data", data);
    resolve(data);
    if (once) delete wiz[apiId];
  };
  wizApi[`reject`] = (error: any) => {
    if (isDebugSDK()) console.log("jsCallback error", error);
    reject(error);
    if (once) delete wiz[apiId];
  };
  otherFunctionList.map((fun) => {
    if (isDebugSDK()) console.log("jsCallback otherFunc", fun.name);
    wizApi[fun.name] = (res: any) => {
      if (isDebugSDK()) console.log("jsCallback otherFunc res", res);
      fun(res);
    };
  });
  return id;
}

function jsPostMessage(api: string, id: string, req: object, func: string[]) {
  if (isDebugSDK()) console.log("wiz", wiz);
  if (!isInWizApp()) return;
  const map = { api, id, req, func };
  if (isDebugSDK()) console.log("postMessage", map);
  wiz.postMessage(JSON.stringify(map));
}

export { exec };
