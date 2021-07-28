/*
 * @FilePath     : /wizjs/src/core/sdk.ts
 * @Date         : 2021-07-19 11:44:08
 * @Author       : jawa0919 <jawa0919@163.com>
 * @Description  : 执行函数
 */

import { wiz, isInWizApp, isDebugSDK, Func } from "..";

function exec<T>(api: string, req?: object, ...f: Func<any>[]): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const id = jsCallback<T>(api, resolve, reject, true, ...f);
    jsPostMessage(api, id, req ?? {}, f.map((r) => r.name) ?? []);
  });
}

let cbIdentity = 0;

function jsCallback<T>(
  api: string,
  resolve: Func<T>,
  reject: Func<any>,
  once: boolean = true,
  ...f: Func<any>[]
): string {
  if (!isInWizApp()) reject("需要在App中打开");
  const id: string = `_${++cbIdentity}`;
  const apiId: string = `${api}${id}`;
  if (typeof wiz[apiId] === "undefined") wiz[apiId] = {};
  const wizApi: any = wiz[apiId];
  wizApi[`resolve`] = (data: T) => {
    if (isDebugSDK()) console.log("______jsCallback data", data);
    resolve(data);
    if (once) delete wiz[apiId];
  };
  wizApi[`reject`] = (error: any) => {
    if (isDebugSDK()) console.log("______jsCallback error", error);
    reject(error);
    if (once) delete wiz[apiId];
  };
  f.map((func) => {
    if (isDebugSDK()) console.log("______jsCallback otherFunc", func.name);
    wizApi[func.name] = (res: any) => {
      if (isDebugSDK()) console.log("______jsCallback otherFunc res", res);
      func(res);
    };
  });
  return id;
}

function jsPostMessage(api: string, id: string, req: object, func: string[]) {
  if (isDebugSDK()) console.log("______wizJs", wiz);
  if (!isInWizApp()) return;
  const map = { api, id, req, func };
  if (isDebugSDK()) console.log("______postMessage", map);
  wiz.postMessage(JSON.stringify(map));
}

export { exec };
