/*
 * @FilePath     : /wizjs/src/core/file.ts
 * @Date         : 2021-08-05 14:40:36
 * @Author       : jawa0919 <jawa0919@163.com>
 * @Description  : 文件
 */

import { DigestAlgorithm, FileType } from "../types";
import { exec } from "./sdk";

/**
 * 删除本地缓存文件
 * @returns void
 */
export function removeSavedFile(filePath: string): Promise<void> {
  return exec<void>("removeSavedFile", { filePath });
}

/**
 * 新开页面打开文档
 * @returns void
 */
export function openDocument(
  filePath: string,
  showMenu = false,
  fileType?: FileType
): Promise<void> {
  return exec<void>("openDocument", { filePath, showMenu, fileType });
}

/**
 * 获取文件信息
 * @returns void
 */
export function getFileInfo(
  filePath: string,
  digestAlgorithm: DigestAlgorithm = "md5"
): Promise<{ size: number; digest: string }> {
  return exec<{ size: number; digest: string }>("getFileInfo", {
    filePath,
    digestAlgorithm,
  });
}

/**
 * 解压文件
 * @returns void
 */
export function unzip(zipFilePath: string, targetPath: string): Promise<void> {
  return exec<void>("unzip", { zipFilePath, targetPath });
}
