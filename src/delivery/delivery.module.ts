import { Module, HttpModule } from '@nestjs/common';
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';

@Module({
  imports: [HttpModule],
  controllers: [DeliveryController],
  providers: [DeliveryService]
})
export class DeliveryModule {}
