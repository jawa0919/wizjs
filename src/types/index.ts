/*
 * @FilePath     : /wizjs/src/types/index.ts
 * @Date         : 2021-07-20 09:18:33
 * @Author       : jawa0919 <jawa0919@163.com>
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
   * 请求方法 默认 GET
   */
  method?: "GET" | "POST";
  /**
   * 请求的 header
   */
  header?: Record<string, string>;
  /**
   * 请求的参数
   */
  data?: string;
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

/**
 * original原图 compressed压缩图
 */
export type MediaSizeType = "original" | "compressed";

/**
 * album从相册选图 camera使用相机
 */
export type MediaSourceType = "album" | "camera";

/**
 * up默认 down180度旋转 left逆时针旋转90度 right顺时针旋转90度
 *
 * up-mirrored同up，但水平翻转 down-mirrored同down，但水平翻转 left-mirrored同left，但垂直翻转 right-mirrored同right，但垂直翻转
 */
export type MediaOrientation =
  | "up"
  | "down"
  | "left"
  | "right"
  | "up-mirrored"
  | "down-mirrored"
  | "left-mirrored"
  | "right-mirrored";
export interface MediaImageFile {
  /**
   * 本地文件路径
   */
  path: string;
  /**
   * 本地文件大小，单位 B
   */
  size: number;
  /**
   * 图片原始宽度，单位px。不考虑旋转。
   */
  width: number;
  /**
   * 图片原始高度，单位px。不考虑旋转。
   */
  height: number;
  /**
   * 拍照时设备方向
   */
  orientation: MediaOrientation;
  /**
   * 图片格式
   */
  type: string;
}

/**
 * low低 medium中 high高
 */
export type MediaQuality = "low" | "medium" | "high";

export interface MediaVideoFile {
  /**
   * 画面方向
   */
  orientation: MediaOrientation;
  /**
   * 视频格式
   */
  type: string;
  /**
   * 视频长度
   */
  duration: number;
  /**
   * 本地文件大小，单位 kB
   */
  size: number;
  /**
   * 图片原始宽度，单位px。
   */
  width: number;
  /**
   * 图片原始高度，单位px。
   */
  height: number;
  /**
   * 视频帧率
   */
  fps: number;
  /**
   * 视频码率，单位 kbps
   */
  bitrate: number;
  /**
   * 本地文件路径
   */
  path: string;
  /**
   * 缩略图文件路径
   */
  imagePath: string;
}
