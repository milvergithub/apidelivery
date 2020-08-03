import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliveryModule } from './delivery/delivery.module';

@Module({
  imports: [HttpModule, DeliveryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
