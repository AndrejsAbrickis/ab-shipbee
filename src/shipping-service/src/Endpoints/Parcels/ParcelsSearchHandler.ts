import { BadRequestException, HttpException } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common/decorators';
import { Parcel } from 'src/Entities/Parcel';
import { Like } from 'typeorm';
import { RepositoryAwareHandler } from '../RepositoryAwareHandler';
import { ParcelsSearchRequestDTO } from './ParcelsSearchRequestDTO';

@Controller('parcels')
export class ParcelsSearchHandler extends RepositoryAwareHandler<Parcel> {
  constructor() {
    super(Parcel);
  }
  @Post('search')
  async index(
    @Body() dto: ParcelsSearchRequestDTO,
  ): Promise<Record<string, Parcel[]> | HttpException> {
    try {
      const parcels = await this.repository.find({
        where: {
          ...(dto.country && { country: dto.country }),
          ...(dto.search && { description: Like(`%${dto.search}%`) }),
        },
        order: {
          deliveryDate: 'DESC',
        },
      });

      return { parcels };
    } catch {
      return new BadRequestException();
    }
  }
}
