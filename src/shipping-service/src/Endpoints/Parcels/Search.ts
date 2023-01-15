import { Controller, Post } from '@nestjs/common/decorators';

@Controller('parcels')
export class ParcelsSearchHandler {
  @Post('search')
  index(): Record<string, string> {
    return { data: 'parcels searched' };
  }
}
