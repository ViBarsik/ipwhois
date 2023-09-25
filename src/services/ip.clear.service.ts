import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { appConfig } from '../config';
import { getSecondDiff } from '../utils/datetime';

@Injectable()
export class IpClearService {
  interval: any;

  run() {
    this.interval = setInterval(this.clearOldCache, appConfig.cacheTime * 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  async clearOldCache() {
    const filePathList = await fs.promises.readdir(appConfig.ipInfoCachePath);
    const currentDate = new Date();

    for (const filename of filePathList) {
      const filePath = `${appConfig.ipInfoCachePath}/${filename}`;
      const { mtime } = await fs.promises.stat(filePath);

      if (getSecondDiff(mtime, currentDate) >= appConfig.cacheTime) {
        await fs.promises.unlink(filePath);
      }
    }
  }
}
