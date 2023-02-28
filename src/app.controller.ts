import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/version')
  getVersion() {
    return {
      PACKAGE_VER: process.env.PACKAGE_VER,
      COMMIT: process.env.COMMIT,
      DEPLOY_DATE: process.env.DEPLOY_DATE,
    };
  }
}
