import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { TookanRequest } from './delivery/dto/tookan_request';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  } 
}
