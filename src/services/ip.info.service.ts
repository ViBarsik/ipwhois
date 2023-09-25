import { Injectable } from '@nestjs/common';
import { Ip } from '../types/Ip';
import * as fs from 'fs';
import { appConfig } from '../config';
import { getSecondDiff } from '../utils/datetime';
import axios from 'axios';

@Injectable()
export class IpInfoService {
  async createCacheDir() {
    fs.existsSync(appConfig.ipInfoCachePath);

    if (!fs.existsSync(appConfig.ipInfoCachePath)) {
      await fs.promises.mkdir(appConfig.ipInfoCachePath);
    }
  }
  async getIpInfo(ip: string): Promise<Ip> {
    const data = await this.getIpInfoCache(ip);

    if (data) {
      const [ipInfo, metadata] = data;
      const currentDate = new Date();
      const lastModifiedDate = metadata.mtime;
      const secondsDiff = getSecondDiff(currentDate, lastModifiedDate);

      if (secondsDiff < appConfig.cacheTime) {
        return ipInfo;
      }
    }

    const result = await axios.get(`${appConfig.ipInfoSource}/${ip}`);
    const ipInfo = new Ip(result.data);

    await this.setIpInfoCache(ipInfo);

    return ipInfo;
  }

  async getIpInfoCache(ip: string): Promise<[Ip, fs.Stats] | null> {
    const filePath = `${appConfig.ipInfoCachePath}/${ip}`;

    if (fs.existsSync(filePath)) {
      const fileMetadata = await fs.promises.stat(filePath);
      const ipInfoString: string = await fs.promises.readFile(filePath, 'utf8');

      if (fileMetadata && ipInfoString) {
        return [new Ip(JSON.parse(ipInfoString)), fileMetadata];
      }
    }

    return null;
  }

  async setIpInfoCache(ipInfo: Ip): Promise<void> {
    await fs.promises.writeFile(
      `${appConfig.ipInfoCachePath}/${ipInfo.ip}`,
      JSON.stringify(ipInfo),
    );
  }
}
