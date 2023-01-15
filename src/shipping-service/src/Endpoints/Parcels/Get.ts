import { Controller, Get } from '@nestjs/common/decorators';

@Controller('parcels')
export class ParcelsGetHandler {
  @Get()
  index(): Record<string, string> {
    return { data: 'parcels fetched' };
  }
}
