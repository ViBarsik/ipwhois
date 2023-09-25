import { Controller, Get, Param, Res } from '@nestjs/common';
import { IpInfoService } from './services/ip.info.service';
import { validateIp } from './validators/ip.validator';

@Controller()
export class AppController {
  constructor(private readonly ipInfoService: IpInfoService) {}

  @Get()
  getHello(): string {
    return 'Ip Info hub';
  }

  @Get('ip/:ip')
  async findOne(@Param('ip') ip: string, @Res() res) {
    if (!validateIp(ip)) {
      return res.status(400).send({
        error: 'Invalid IPv4 format',
      });
    }

    const ipInfo = await this.ipInfoService.getIpInfo(ip);

    return res.status(200).send(ipInfo);
  }
}
