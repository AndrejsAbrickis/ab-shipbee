import { BadRequestException, HttpException } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common/decorators';
import { Parcel } from 'src/Entities/Parcel';
import { RepositoryAwareHandler } from '../RepositoryAwareHandler';

@Controller('parcels')
export class ParcelsGetHandler extends RepositoryAwareHandler<Parcel> {
  constructor() {
    super(Parcel);
  }

  @Get()
  async index(): Promise<Record<string, Parcel[]> | HttpException> {
    try {
      const parcels = await this.repository.find({
        order: { deliveryDate: 'DESC' },
      });

      return { parcels };
    } catch {
      return new BadRequestException();
    }
  }
}
