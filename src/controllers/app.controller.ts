import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('BaseUrl')
export class AppController {
  @Get()
  getHello() {
    return { success: true, data: 'Clock IN It Challenge' };
  }
}
