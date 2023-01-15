import { Module } from '@nestjs/common';
import { ParcelsHandlers } from './Endpoints/Parcels';

@Module({
  imports: [],
  controllers: [...ParcelsHandlers],
  providers: [],
})
export class AppModule {}
