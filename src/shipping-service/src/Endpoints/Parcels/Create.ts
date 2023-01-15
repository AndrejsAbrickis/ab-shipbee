import { Controller, Post } from '@nestjs/common/decorators';

@Controller('parcels')
export class ParcelsCreateHandler {
  @Post()
  index(): Record<string, string> {
    return { data: 'parcel created' };
  }
}
