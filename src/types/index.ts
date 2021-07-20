/*
 * @FilePath     : /wizjs/src/types/index.ts
 * @Date         : 2021-07-19 11:46:32
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 类型声明
 */

export interface WizSystemInfo {
  /// 设备品牌
  brand: string;
  /// 设备型号。新机型刚推出一段时间会显示unknown，会尽快进行适配。
  model: string;
  /// 设备像素比
  pixelRatio: number;
  /// 屏幕宽度
  screenWidth: number;
  /// 屏幕高度
  screenHeight: number;
  /// 状态栏的高度
  statusBarHeight: number;
  /// 版本号
  version: string;
  /// 操作系统及版本
  system: string;
  /// 客户端平台
  platform: string;
  /// 设备方向
  deviceOrientation: string;
}
