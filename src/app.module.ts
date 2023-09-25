import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IpInfoService } from './services/ip.info.service';
import { IpClearService } from './services/ip.clear.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, IpInfoService, IpClearService],
})
export class AppModule {
  constructor(
    private readonly ipInfoService: IpInfoService,
    private readonly ipClearService: IpClearService,
  ) {
    this.ipInfoService.createCacheDir();
    this.ipClearService.run();
  }
}
