/*
 * @FilePath     : /wizjs/src/core/media.ts
 * @Date         : 2021-07-28 10:23:00
 * @Author       : jawa0919 <jawa0919@163.com>
 * @Description  : 媒体
 */

import {
  MediaImageFile,
  MediaQuality,
  MediaSizeType,
  MediaSourceType,
  MediaVideoFile,
} from "../types";
import { exec } from "./sdk";

/**
 * 保存图片到系统相册
 * @param filePath 图片文件本地路径
 * @returns 文件新地址
 */
export function saveImageToPhotosAlbum(filePath: string): Promise<string> {
  return exec<string>("saveImageToPhotosAlbum", { filePath });
}

/**
 * 获取图片信息
 * @param src 图片的路径
 * @returns 图片详细信息
 */
export function getImageInfo(src: string): Promise<MediaImageFile> {
  return exec<MediaImageFile>("getImageInfo", { src });
}

/**
 * 压缩图片接口，可选压缩质量
 * @param src 图片路径
 * @param quality 压缩质量，范围0～100 默认80
 * @returns 压缩后图片的文件路径
 */
export function compressImage(src: string, quality = 80): Promise<string> {
  return exec<string>("compressImage", { src, quality });
}

/**
 * 从本地相册选择图片或使用相机拍照。
 * @param count 最多可以选择的图片张数 默认9
 * @param sizeType 所选的图片的尺寸 默认
 * @param sourceType 选择图片的来源 默认
 * @returns 图片信息
 */
export function chooseImage(
  count = 9,
  sizeType = ["original" as MediaSizeType, "compressed" as MediaSizeType],
  sourceType = ["album" as MediaSourceType, "camera" as MediaSourceType]
): Promise<MediaImageFile[]> {
  return exec<MediaImageFile[]>("chooseImage", { count, sizeType, sourceType });
}

/**
 * 保存视频到系统相册
 * @param filePath 视频文件本地路径
 * @returns 文件新地址
 */
export function saveVideoToPhotosAlbum(filePath: string): Promise<string> {
  return exec<string>("saveVideoToPhotosAlbum", { filePath });
}

/**
 * 获取视频详细信息
 * @param src 视频文件路径
 * @returns 视频详细信息
 */
export function getVideoInfo(src: string): Promise<MediaVideoFile> {
  return exec<MediaVideoFile>("getVideoInfo", { src });
}

/**
 * 压缩视频接口
 * @param src 视频文件路径
 * @param quality 压缩质量
 * @returns 视频信息
 */
export function compressVideo(
  src: string,
  quality: MediaQuality
): Promise<MediaVideoFile> {
  return exec<MediaVideoFile>("compressVideo", { src, quality });
}

/**
 * 拍摄视频或从手机相册中选视频
 * @param sourceType 视频选择的来源 默认 从相册选图,使用相机
 * @param compressed 是否压缩所选择的视频文件 默认 true
 * @param maxDuration 拍摄视频最长拍摄时间，单位秒
 * @returns 视频信息
 */
export function chooseVideo(
  sourceType = ["album" as MediaSourceType, "camera" as MediaSourceType],
  compressed = true,
  maxDuration = 60
): Promise<MediaVideoFile> {
  return exec<MediaVideoFile>("chooseVideo", {
    sourceType,
    compressed,
    maxDuration,
  });
}
