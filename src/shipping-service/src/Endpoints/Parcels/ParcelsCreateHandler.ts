import { BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common/decorators';
import { Parcel } from 'src/Entities/Parcel';
import { RepositoryAwareHandler } from '../RepositoryAwareHandler';
import { ParcelsCreateRequestDTO } from './ParcelsCreateRequestDTO';

@Controller('parcels')
export class ParcelsCreateHandler extends RepositoryAwareHandler<Parcel> {
  constructor() {
    super(Parcel);
  }

  @Post()
  async index(
    @Body() dto: ParcelsCreateRequestDTO,
  ): Promise<Record<string, Parcel> | HttpException> {
    try {
      if (await this.repository.exist({ where: { sku: dto.sku } })) {
        return new HttpException('SKU already exists', HttpStatus.BAD_REQUEST);
      }

      const parcel = await this.repository.save(dto);

      return { parcel };
    } catch {
      return new BadRequestException();
    }
  }
}
