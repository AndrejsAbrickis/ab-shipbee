import { IsNotEmpty, IsOptional } from 'class-validator';

export class ParcelsCreateRequestDTO {
  @IsNotEmpty()
  public sku: string;

  @IsOptional()
  public description: string;

  @IsNotEmpty()
  public streetAddress: string;

  @IsNotEmpty()
  public postcode: string;

  @IsNotEmpty()
  public city: string;

  @IsNotEmpty()
  public country: string;

  @IsNotEmpty()
  public deliveryDate: string;
}
