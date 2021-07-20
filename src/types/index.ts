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
