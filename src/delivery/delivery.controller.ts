import { Controller, Post, Body, Req, Query, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrderDto } from './dto/order.dto';
import { DeliveryService } from './delivery.service';
import { TookanResponse } from './dto/tookan_response';
import { DeliveryParam } from './classes/delivery_param';

@ApiTags('delivery')
@Controller('delivery')
export class DeliveryController {

  constructor(private readonly deliveryService: DeliveryService) {}

  @Post()
  @ApiOperation({ summary: 'delivery an order completed.' })
  async delivery(@Query() query: DeliveryParam, @Body(new ValidationPipe()) orderDto: OrderDto): Promise<TookanResponse> {
    console.log(query);
    return this.deliveryService.delivery(orderDto, query);
  }
}
