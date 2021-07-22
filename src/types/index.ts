/*
 * @FilePath     : /wizjs/src/types/index.ts
 * @Date         : 2021-07-19 11:46:32
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 类型声明
 */

export interface WizSystemInfo {
  /**
   * 设备品牌
   */
  brand: string;
  /**
   * 设备型号
   */
  model: string;
  /**
   * App版本号
   */
  version: string;
  /**
   * 操作系统及版本
   */
  system: string;
  /**
   * 客户端平台
   */
  platform: string;
  /**
   * 允许使用摄像头的开关
   */
  cameraAuthorized: boolean;
  /**
   * 允许使用定位的开关
   */
  locationAuthorized: boolean;
  /**
   * 允许使用麦克风的开关
   */
  microphoneAuthorized: boolean;
  /**
   * 设备方向
   *
   * portrait竖屏/landscape横屏
   */
  deviceOrientation: string;
}

export interface RequestOpting {
  /**
   * 开发者服务器接口地址
   */
  url: string;
  /**
   * 请求方法
   */
  method?: string;
  /**
   * 设置请求的 header
   */
  header?: object;
  /**
   * 请求的参数
   */
  data?: string | object | ArrayBuffer;
}

export interface ResponseOpting {
  /**
   * 开发者服务器返回的数据
   */
  data: string | object | ArrayBuffer;
  /**
   * 开发者服务器返回的 HTTP 状态码
   */
  statusCode: number;
  /**
   * 开发者服务器返回的 HTTP Response Header
   */
  header: object;
}

export type Func<T extends any> = (args: T) => void;

export type ProgressOpting = {
  /**
   *上传进度百分比
   */
  progress: number;
  /**
   *已经上传的数据长度，单位 Bytes
   */
  totalBytesWritten: number;
  /**
   *预期需要上传的数据总长度，单位 Bytes
   */
  totalBytesExpectedToWrite: number;
};

export type ProgressCallback = Func<ProgressOpting>;
